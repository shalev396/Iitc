from selenium import webdriver
from selenium.webdriver.chrome.service import  Service
from selenium.webdriver.common.by import By
from time import sleep
services =Service(executable_path="../../driver/chromedriver.exe")
options =webdriver.ChromeOptions()
driver=webdriver.Chrome(service=services,options=options)

# driver.get("https://google.com")
# driver.get("http://localhost:3000")

driver.get("https://atid.store/")
element=driver.find_element(By.XPATH,"//a[@href='https://atid.store/store/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Shop Now']")
element.click()
print("title")
print(driver.title)
driver.maximize_window()
# print("current_url")
# print(driver.current_url)
# print("refresh")
# driver.refresh()
# print("back")
# driver.back()
# print("forward")
# driver.forward()

sleep(10)