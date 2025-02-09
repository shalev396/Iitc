import pytest
import logging
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from datetime import datetime
from time import sleep

# Ensure pytest displays logs
@pytest.fixture(autouse=True)
def enable_logging():
    logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s", force=True)
# Constants
BASE_URL = "https://atid.store/"
SCREENSHOT_PATH = "./screenshots/"
# Elements array
ELEMENTS = {
    "shop_now_button": "//a[@href='https://atid.store/store/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Shop Now']",
    "home_navigation_button": "//li[@id='menu-item-381']//a[@class='menu-link'][normalize-space()='Home']",
    "store_navigation_button": "//li[@id='menu-item-45']//a[@class='menu-link'][normalize-space()='Store']",
    "men_navigation_button": "//li[@id='menu-item-266']//a[@class='menu-link'][normalize-space()='Men']",
    "women_navigation_button": "//li[@id='menu-item-267']//a[@class='menu-link'][normalize-space()='Women']",
    "accessories_navigation_button":"//li[@id='menu-item-671']//a[@class='menu-link'][normalize-space()='Accessories']",
    "about_navigation_button":"//li[@id='menu-item-828']//a[@class='menu-link'][normalize-space()='About']",
    "contact_us_navigation_button":"//li[@id='menu-item-829']//a[@class='menu-link'][normalize-space()='Contact Us']",
    "logo_img":"//div[@class='ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout']//img[@class='custom-logo']",
    "search_bar_button":"//a[@aria-label='Search icon link']",
    "search_bar_input":"//input[@placeholder='Search …']"
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
    # logging.info(f"📸 Screenshot saved: {filename}")
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
class TestBasic:
    driver: webdriver.Chrome
    wait: WebDriverWait
    def test_01_title(self):
        """Verify page title"""
        assert self.driver.title.__contains__("ATID"),"❌ Title"
        take_screenshot(self.driver, "landing")
        logging.info("✅ Title verified")
    def test_02_url(self):
        """Verify page url"""
        assert self.driver.current_url=="https://atid.store/", "❌ Url"
        logging.info("✅ Url verified")
    def test_03_shop_now_button(self):
        """Verify shop now button"""
        assert find_element(self.wait,"shop_now_button").text=="SHOP NOW", "❌ Show Now Button"
        logging.info("✅ Show Now Button verified")
    def test_04_navigation_menu(self):
        """Verify navigation buttons"""
        assert find_element(self.wait, "home_navigation_button").text == "HOME", "❌ Home Navigation Button"
        assert find_element(self.wait, "store_navigation_button").text == "STORE", "❌ Store Navigation Button"
        assert find_element(self.wait, "men_navigation_button").text == "MEN", "❌ Men Navigation Button"
        assert find_element(self.wait, "women_navigation_button").text == "WOMEN", "❌ Women Navigation Button"
        assert find_element(self.wait, "accessories_navigation_button").text == "ACCESSORIES", "❌ Accessories Navigation Button"
        assert find_element(self.wait,"about_navigation_button").text == "ABOUT", "❌ About Navigation Button"
        assert find_element(self.wait,"contact_us_navigation_button").text == "CONTACT US", "❌ Contact Us Navigation Button"
        logging.info("✅ All Navigation Buttons verified")
    def test_05_shop_now_button_click(self):
        """Verify shop now button click"""
        find_element(self.wait,"shop_now_button").click()
        assert self.driver.current_url == "https://atid.store/store/", "❌ Show Now Button Not Redirect Correctly"
        logging.info("✅ Show Now Button Redirect Correctly")
    def test_06_logo_img(self):
        """Verify logo img display"""
        self.driver.get(BASE_URL)
        assert find_element(self.wait,"logo_img").is_displayed(), "❌ Logo Img Not Displaying"
        logging.info("✅ Logo Img Displaying")
    def test_07_search_bar_input(self):
        find_element(self.wait,"search_bar_input").click()
        assert find_element(self.wait,"").is_displayed(),"❌ Search Bar Input Not Displaying"
        logging.info("✅ Search Bar Input Displaying")


