from selenium import webdriver
from selenium.webdriver.chrome.service import  Service
from selenium.webdriver.common.by import By
from time import sleep
services =Service(executable_path="../driver/chromedriver.exe")
options =webdriver.ChromeOptions()
driver=webdriver.Chrome(service=services,options=options)

driver.maximize_window()
driver.get("https://atid.store/")
shop_now_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/article[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]/span[1]/span[1]")
shop_now_button.click()
sleep(2)