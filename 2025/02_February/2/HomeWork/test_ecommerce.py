import pytest
import logging
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
BASE_URL = "http://localhost:5173"  # Change this if needed
SCREENSHOT_PATH = "./screenshots/"

ELEMENTS = {
    "title": "//h6[@class='MuiTypography-root MuiTypography-h6 css-1bv5yfe-MuiTypography-root']",
    "search_bar": "//input[@id=':r1:']",
    "cart_button": "//button[normalize-space()='Cart']",
    "broken_action": "//button[normalize-space()='Broken Action']",
    "featured_heading": "//h3[@class='MuiTypography-root MuiTypography-h3 MuiTypography-gutterBottom css-uynfxu-MuiTypography-root']",
    "subscribe_input": "//input[@id=':r3:']",
    "subscribe_button": "//button[normalize-space()='Subscribe']",
    "show_cart_button": '//*[@id="root"]/div/div[2]/div[7]/button/span',
    "faq_buttons": "//p[contains(text(),'What is your return policy?') or contains(text(),'Do you offer international shipping?') or contains(text(),'Can I change or cancel my order?')]",
    "product_cards": '//*[@id="root"]/div/div[2]/div[2]/div',
    "contact_name": "//input[@id=':r5:']",
    "contact_email": "//input[@id=':r7:']",
    "contact_message": "//textarea[@id=':r9:']",
    "submit_button": "//button[@type='submit']",
    #"mock_api_error": "//p[contains(text(),'API error')]",  # Adjust if error messages differ
    "cart_table": '//*[@id="root"]/div/div[2]/div[5]/div/table',
    "cart_items": '//*[@id="root"]/div/div[2]/div[5]/div/table/tr',
    "footer_text": "//p[normalize-space()='© 2025 MyEcommerce - All rights reserved.']"
}

@pytest.fixture(scope="class")
def setup(request):
    """Setup WebDriver with Chrome before running tests"""
    driver = webdriver.Chrome()
    driver.get(BASE_URL)
    driver.maximize_window()
    request.cls.driver = driver
    request.cls.wait = WebDriverWait(driver, 10)
    yield
    driver.quit()

@pytest.mark.usefixtures("setup")
class TestEcommerce:

    def test_01_page_title(self):
        """Verify the page title is correct"""
        title = self.driver.title
        logging.info(f"Page Title: {title}")
        assert "MyEcommerce" in title, "Page title mismatch"

    def test_02_header_elements(self):
        """Verify header elements are visible"""
        self.wait.until(EC.presence_of_element_located((By.XPATH, ELEMENTS["search_bar"])))
        assert self.driver.find_element(By.XPATH, ELEMENTS["cart_button"]).is_displayed()
        assert self.driver.find_element(By.XPATH, ELEMENTS["broken_action"]).is_displayed()

    def test_03_featured_products_heading(self):
        """Check if the Featured Products heading is present"""
        heading = self.driver.find_element(By.XPATH, ELEMENTS["featured_heading"])
        assert heading.is_displayed(), "Featured products heading is missing"

    def test_04_subscription_form(self):
        """Validate email field and error handling"""
        input_box = self.driver.find_element(By.XPATH, ELEMENTS["subscribe_input"])
        button = self.driver.find_element(By.XPATH, ELEMENTS["subscribe_button"])

        input_box.clear()
        input_box.send_keys("invalid-email")
        button.click()
        time.sleep(1)

        try:
            error_message = self.driver.find_element(By.XPATH, "//p[@id=':r3:-helper-text']")
            assert error_message.is_displayed(), "Expected email error message not found"
        except:
            self.driver.save_screenshot(SCREENSHOT_PATH + "fail_subscription.png")
            raise AssertionError("Email validation failed")

    def test_05_contact_form(self):
        """Check if Name, Email, Message fields exist and validate input"""
        assert self.driver.find_element(By.XPATH, ELEMENTS["contact_name"]).is_displayed()
        assert self.driver.find_element(By.XPATH, ELEMENTS["contact_email"]).is_displayed()
        assert self.driver.find_element(By.XPATH, ELEMENTS["contact_message"]).is_displayed()

        name = self.driver.find_element(By.XPATH, ELEMENTS["contact_name"])
        email = self.driver.find_element(By.XPATH, ELEMENTS["contact_email"])
        message = self.driver.find_element(By.XPATH, ELEMENTS["contact_message"])
        submit = self.driver.find_element(By.XPATH, ELEMENTS["submit_button"])

        name.send_keys("Test User")
        email.send_keys("user@example.com")
        message.send_keys("This is a test message")
        submit.click()
        time.sleep(1)

    def test_06_show_cart(self):
        """Verify clicking 'Show Cart' button displays the cart table"""
        cart_button = self.driver.find_element(By.XPATH, ELEMENTS["show_cart_button"])
        cart_button.click()
        time.sleep(2)
        try:
            cart_table = self.driver.find_element(By.XPATH, ELEMENTS["cart_table"])
            assert cart_table.is_displayed(), "Cart did not appear!"
        except:
            self.driver.save_screenshot(SCREENSHOT_PATH + "fail_cart.png")
            raise AssertionError("Cart did not display")

    def test_07_faq_section(self):
        """Expand and collapse FAQ items"""
        faq_buttons = self.driver.find_elements(By.XPATH, ELEMENTS["faq_buttons"])
        for button in faq_buttons:
            button.click()
            time.sleep(1)
            assert button.is_displayed(), "FAQ button issue detected"

    def test_08_mock_api_fail(self):
        """Simulate a mock API failure and check for an error message"""
        time.sleep(3)  # Wait in case API takes time to fail
        try:
            error_msg = self.driver.find_element(By.XPATH, ELEMENTS["mock_api_error"])
            assert error_msg.is_displayed(), "API failure message not found"
        except:
            self.driver.save_screenshot(SCREENSHOT_PATH + "fail_mock_api.png")
            raise AssertionError("API error did not appear")

    def test_09_footer(self):
        """Ensure footer is visible"""
        footer = self.driver.find_element(By.XPATH, ELEMENTS["footer_text"])
        assert footer.is_displayed(), "Footer is missing"

