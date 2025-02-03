import pytest
import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
from time import sleep
import json
import os
# Ensure pytest displays logs
@pytest.fixture(autouse=True)
def enable_logging():
    logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s", force=True)
# Constants
BASE_URL = "https://www.kipa.co.il/%D7%99%D7%A9%D7%A8%D7%90%D7%9C-%D7%91%D7%9E%D7%9C%D7%97%D7%9E%D7%94/%D7%A9%D7%9E%D7%95%D7%AA-%D7%94%D7%94%D7%A8%D7%95%D7%92%D7%99%D7%9D/"
@pytest.fixture(scope="class")
def setup(request) -> None:
    """Setup WebDriver"""
    driver = webdriver.Chrome()
    driver.get(BASE_URL)
    driver.maximize_window()
    request.cls.driver = driver
    request.cls.wait = WebDriverWait(driver, 10)
    yield driver
    sleep(3)
    driver.quit()
@pytest.mark.usefixtures("setup")
class Test:
    driver: webdriver.Chrome
    wait: WebDriverWait
    def test_01_title(self):
        """Verify page title"""
        soldiers_data = []
        base_xpath = "//body/div[@id='root']/main[@id='content']/div[@class='container']/div"
        counter = 1
        while counter <= 983:  # You can adjust the limit as needed
            try:
                card_xpath = f"{base_xpath}[{counter}]"
                name_xpath = f"{card_xpath}/div[1]"
                element = self.wait.until(EC.presence_of_element_located((By.XPATH, name_xpath)))
                full_text = element.text
                parts = full_text.split(' ')
                level_parts = []
                name_parts = []
                for part in parts:
                    if 'ז"ל' in part:
                        continue
                    if any(rank in part for rank in [
                        'רס"ב',
                        'סמ"ר',
                        'רס"ן',
                        'סרן',
                        'רב"ט',
                        'סג"מ',
                        'אל"מ',
                        'סמל',
                        'תא"ל']):
                        level_parts.append(part)
                    else:
                        name_parts.append(part)
                level = ' '.join(level_parts).strip()
                name = ' '.join(name_parts).strip()
                soldier_info = {
                    "name": name,
                    "level": level
                }
                soldiers_data.append(soldier_info)
                logging.info(f"Added soldier: {soldier_info}")
                counter += 1
            except Exception as e:
                logging.info(f"Finished processing at {counter-1} entries")
                break
        logging.info(f"Total soldiers processed: {len(soldiers_data)}")
        output_dir = "output"
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        timestamp = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
        json_filename = os.path.join(output_dir, f'soldiers_data_{timestamp}.json')
        with open(json_filename, 'w', encoding='utf-8') as f:
            json.dump(soldiers_data, f, ensure_ascii=False, indent=2)
        logging.info(f"💾 Data saved to: {json_filename}")
        return soldiers_data

