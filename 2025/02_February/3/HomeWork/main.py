import pytest
import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from datetime import datetime
from time import sleep
@pytest.fixture(autouse=True)
def enable_logging():
    logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s", force=True)
BASE_URL = "https://www.futbin.com/"
PLAYERS = ["Lionel Messi", "Cristiano Ronaldo", "Kylian Mbappe", "Neymar Jr", "Kevin De Bruyne",
           "Virgil van Dijk", "Robert Lewandowski", "Mohamed Salah", "Sadio Mane", "Erling Haaland", "Jan Oblak"]
ELEMENTS = {
    "search_input": "//input[@placeholder='Search for EA FC 25 Player...']",
    "player_name": "//div[@class='playercard-name']",
    "player_stats": "//div[@class='playercard-attr']"
}
def find_element(wait, xpath, expected_text=None):
    """Wait for an element, assert visibility, and optionally verify text."""
    element = wait.until(EC.presence_of_element_located((By.XPATH, xpath)))
    assert element.is_displayed(), f"❌ Element with xpath {xpath} not displayed"
    if expected_text:
        assert element.text == expected_text, f"❌ Expected '{expected_text}', got '{element.text}'"
    return element
@pytest.fixture(scope="class")
def setup(request):
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
class TestFutbin:
    driver: webdriver.Chrome
    wait: WebDriverWait
    def test_collect_player_stats(self):
        """Collect stats for a list of players"""
        player_data = []
        for player in PLAYERS:
            search_input = find_element(self.wait, ELEMENTS["search_input"])
            search_input.clear()
            for i in range(len(player)):
                search_input.send_keys(player[i])
                sleep(0.3)
            search_input.send_keys(Keys.ENTER)
            sleep(40)
            first_result = self.wait.until(EC.element_to_be_clickable((By.XPATH, "//div[@class='playercard-name']")))
            first_result.click()
            player_name_elem = find_element(self.wait, ELEMENTS["player_name"])
            player_name = player_name_elem.text
            stats_elements = self.driver.find_elements(By.XPATH, ELEMENTS["player_stats"])
            stats = {stat.get_attribute("data-original-title"): stat.text for stat in stats_elements}
            player_data.append({
                "name": player_name,
                "stats": stats
            })
            logging.info(f"✅ Collected stats for {player_name}")
            self.driver.get(BASE_URL)
        for pdata in player_data:
            logging.info(f"Player: {pdata['name']}")
            for stat_name, stat_value in pdata['stats'].items():
                logging.info(f"  {stat_name}: {stat_value}")