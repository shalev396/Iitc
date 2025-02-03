import pytest
import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
from time import sleep
# Ensure pytest displays logs
@pytest.fixture(autouse=True)
def enable_logging():
    logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s", force=True)
# Constants
BASE_URL = "https://the-internet.herokuapp.com/javascript_alerts"
SCREENSHOT_PATH = "./screenshots/"
# Elements array
ELEMENTS = {
    "title_h3": "//h3[normalize-space()='JavaScript Alerts']",
    "alert_button": "//button[@onclick='jsAlert()']",
    "confirm_button": "//button[@onclick='jsConfirm()']",
    "prompt_button": "//button[@onclick='jsPrompt()']",
    "result_p": "//p[@id='result']",
    "small_modal_button":"//button[@id='showSmallModal']",
    "small_modal":"//div[@class='modal-content']",
    "iframe":"//iframe[@id='iframe']",
    "iframe_search":"//input[@id='searchInput']"
}
# Utility functions
def find_element(wait, element_name, expected_text=None):
    """Wait for an element, assert visibility, and optionally verify text."""
    element = wait.until(EC.presence_of_element_located((By.XPATH, ELEMENTS[element_name])))
    assert element.is_displayed(), f"❌ Element {element_name} not displayed"
    if expected_text:
        assert element.text == expected_text, f"❌ Expected '{expected_text}', got '{element.text}'"
    return element
def take_screenshot(driver, name):
    """Capture and save a screenshot."""
    filename = f"{SCREENSHOT_PATH}{name}-{datetime.now().strftime('%Y-%m-%d_%H-%M-%S')}.png"
    driver.save_screenshot(filename)
    logging.info(f"📸 Screenshot saved: {filename}")
    return filename
def handle_alert(driver, action="accept", text=None):
    """Handle alerts: Accept, Dismiss, or Send Text."""
    alert = driver.switch_to.alert
    if text:
        alert.send_keys(text)
    if action == "accept":
        alert.accept()
    elif action == "dismiss":
        alert.dismiss()
def verify_result_text(wait, expected_text):
    """Verify the result paragraph text."""
    find_element(wait, "result_p", expected_text)
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
class TestEcommerce:
    driver: webdriver.Chrome
    wait: WebDriverWait
    def test_01_title(self):
        """Verify page title"""
        find_element(self.wait, "title_h3")
        take_screenshot(self.driver, "landing")
        logging.info("✅ Title verified")
    def test_02_alert(self):
        """Verify alert button functionality"""
        find_element(self.wait, "alert_button").click()
        handle_alert(self.driver)
        verify_result_text(self.wait, "You successfully clicked an alert")
        logging.info("✅ Alert handled")
    def test_03_confirm(self):
        """Verify confirm button functionality"""
        confirm_button = find_element(self.wait, "confirm_button")
        confirm_button.click()
        handle_alert(self.driver, "accept")
        verify_result_text(self.wait, "You clicked: Ok")
        confirm_button.click()
        handle_alert(self.driver, "dismiss")
        verify_result_text(self.wait, "You clicked: Cancel")
        logging.info("✅ Confirm button")
    def test_04_prompt(self):
        """Verify prompt button functionality"""
        prompt_button = find_element(self.wait, "prompt_button")
        prompt_button.click()
        handle_alert(self.driver, "accept", "shalev")
        verify_result_text(self.wait, "You entered: shalev")
        prompt_button.click()
        handle_alert(self.driver, "dismiss", "shalev")
        verify_result_text(self.wait, "You entered: null")
        logging.info("✅ Prompt button verified")
    # def test_05_small_modal(self):
    #     self.driver.get("https://demoqa.com/modal-dialogs")
    #     self.wait = WebDriverWait(self.driver, 10)
    #     small_modal_button=find_element(self.wait,"small_modal_button")
    #     small_modal_button.click()
    #     small_modal=find_element(self.wait,"small_modal")
    def test_06_iframe(self):
        self.driver.get("http://127.0.0.1:5500/index.html")
        self.wait = WebDriverWait(self.driver, 10)
        iframe = find_element(self.wait, "iframe")
        iframe.click()
        small_modal = find_element(self.wait, "small_modal")
