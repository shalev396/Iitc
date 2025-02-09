from selenium import webdriver
from selenium.webdriver.chrome.service import  Service
from selenium.webdriver.common.by import By
from time import sleep
services =Service(executable_path="../../driver/chromedriver.exe")
options =webdriver.ChromeOptions()
driver=webdriver.Chrome(service=services,options=options)

driver.get("https://atid.store/")
driver.maximize_window()
shop_now_button=driver.find_element(By.XPATH,"//a[@href='https://atid.store/store/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Shop Now']")
shop_now_button.click()
add_shoes_button=driver.find_element(By.XPATH,"//h2[normalize-space()='ATID Black Shoes']")
add_shoes_button.click()
add_to_cart_button=driver.find_element(By.XPATH,"//button[@name='add-to-cart']")
show_cart=driver.find_element(By.XPATH,"//div[@role='alert']//a[@class='button wc-forward'][normalize-space()='View cart']")
show_cart.click()
checkout_button=driver.find_element(By.XPATH,"//a[@class='checkout-button button alt wc-forward']")
checkout_button.click()
print()