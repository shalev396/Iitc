from selenium import webdriver
from selenium.webdriver.chrome.service import  Service
from selenium.webdriver.common.by import By
from time import sleep
services =Service(executable_path="../driver/chromedriver.exe")
options =webdriver.ChromeOptions()
driver=webdriver.Chrome(service=services,options=options)

driver.get("https://atid.store/")
driver.maximize_window()
shop_now_button=driver.find_element(By.XPATH,"//a[@href='https://atid.store/store/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Shop Now']")
shop_now_button.click()
search_bar_input=driver.find_element(By.XPATH,"//input[@id='wc-block-search__input-1']")
search_bar_input.send_keys("Anchor Bracelet")
search_bar_button=driver.find_element(By.XPATH,"//button[@aria-label='Search']//*[name()='svg']")
search_bar_button.click()
item_title_h1=driver.find_element(By.XPATH,"//h1[@class='product_title entry-title']")
print(item_title_h1.text)
sleep(10)