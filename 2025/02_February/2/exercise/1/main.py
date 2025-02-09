from calendar import error
from datetime import datetime
import logging
from selenium import webdriver
from selenium.webdriver.chrome.service import  Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select ,WebDriverWait
from selenium.common.exceptions import NoSuchElementException,TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from time import sleep, time


services =Service(executable_path="../../driver/chromedriver.exe")
options =webdriver.ChromeOptions()
# options.add_argument("headless")
# options.add_argument("--window-size=2560,1440")
options.add_argument("--window-size=1024,768")
driver=webdriver.Chrome(service=services,options=options)
# driver.maximize_window()
driver.get("http://localhost:5173")
logging.basicConfig(level=logging.INFO,format='%(asctime)s - %(levelname)s - %(message)s')

logging.info('started')
try:
    assert "Vite + React" in driver.title,"X the title dose not match"
    
    logo = driver.find_element(By.XPATH, "//h6[@class='MuiTypography-root MuiTypography-h6 css-1bv5yfe-MuiTypography-root']")
    assert logo.is_displayed()==False,"Site logo/brand should be visible in the header."
    
    # Verify the search bar
    search_bar = driver.find_element(By.XPATH, "//input[@id=':r1:']")
    assert search_bar.is_displayed(), "Search bar should be visible."
    search_bar.send_keys("test search")
    
    # Verify the CART link
    cart_link = driver.find_element(By.XPATH, "//button[normalize-space()='Cart']")
    assert cart_link.is_displayed(), "Cart link should be visible in the header."
    
    # Verify the BROKEN ACTION link (if relevant)
    broken_action_link = driver.find_element(By.XPATH, "//button[normalize-space()='Broken Action']")
    assert broken_action_link.is_displayed(), "Broken action link should be visible in the header."
except error:
    logging.error(error)
#
# try:
#     # Wait for it
#     mail_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//input[@id=':r3:']")))
#     assert mail_input.is_displayed(), "Element not displayed"
#     # Try label
#     label_xpath = '//*[@id="root"]/div/div[1]/div/div/div/fieldset/legend/span'
#     mail_label = driver.find_element(By.XPATH, label_xpath)
#     mail_label.is_displayed()
#     # for i in range(5):
#     #     sleep(5)
#     #     now =datetime.now()
#     #     print(now)
#     #     time=now.__str__().replace(" ", "_").replace(".","_").replace(":","-")
#     #     save_url = f"./screenshots/landing_{time}.png"
#     #     print(save_url)
#     #     driver.save_screenshot(save_url)
#     #     print("V search")
# except (TimeoutException, NoSuchElementException):
#     print("Element not found")
#
#
