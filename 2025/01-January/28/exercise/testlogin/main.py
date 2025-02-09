from selenium import webdriver
from selenium.webdriver.chrome.service import  Service
from selenium.webdriver.common.by import By
from time import sleep
services =Service(executable_path="../../driver/chromedriver.exe")
options =webdriver.ChromeOptions()
driver=webdriver.Chrome(service=services,options=options)

driver.get("https://practicetestautomation.com/practice-test-login/")
driver.maximize_window()
username_span=driver.find_element(By.XPATH,"//li[contains(text(),'Use next credentials to execute Login:')]//b[contains(text(),'student')]")
password_span=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/div[1]/section[1]/section[1]/ul[1]/li[2]/b[2]")

username_input=driver.find_element(By.XPATH,"//input[@id='username']")
password_input=driver.find_element(By.XPATH,"//input[@id='password']")

username_input.send_keys(username_span.text)
password_input.send_keys(password_span.text)

submit_login=driver.find_element(By.XPATH, "//button[@id='submit']")

submit_login.click()
logged_in_url="https://practicetestautomation.com/logged-in-successfully/"
if logged_in_url==driver.current_url:
    print("success")
else:
    print("not working")
sleep(10)