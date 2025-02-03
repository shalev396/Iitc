from selenium import webdriver
from selenium.webdriver.chrome.service import  Service
from selenium.webdriver.common.by import By
from time import sleep
services =Service(executable_path="../driver/chromedriver.exe")
options =webdriver.ChromeOptions()
driver=webdriver.Chrome(service=services,options=options)

driver.maximize_window()
driver.get("https://atid.store/")
if driver.title.__contains__("ATID"):
    print("V title")
else:
    print("X title")
if driver.current_url=="https://atid.store/":
    print("V url")
else:
    print("X url")
shop_now_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/article[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]/span[1]/span[1]")
if shop_now_button.text=="SHOP NOW":
    print("V shop now button")
else:
    print("X shop now button")
home_navigation_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nav[1]/div[1]/ul[1]/li[1]/a[1]")
store_navigation_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nav[1]/div[1]/ul[1]/li[2]/a[1]")
men_navigation_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nav[1]/div[1]/ul[1]/li[3]/a[1]")
women_navigation_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nav[1]/div[1]/ul[1]/li[4]/a[1]")
accessories_navigation_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nav[1]/div[1]/ul[1]/li[5]/a[1]")
about_navigation_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nav[1]/div[1]/ul[1]/li[6]/a[1]")
contact_Us_navigation_button=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nav[1]/div[1]/ul[1]/li[7]/a[1]")
if home_navigation_button.text=="HOME" and store_navigation_button.text=="STORE" and men_navigation_button.text=="MEN" and women_navigation_button.text=="WOMEN" and accessories_navigation_button.text=="ACCESSORIES" and about_navigation_button.text=="ABOUT" and contact_Us_navigation_button.text=="CONTACT US":
    print("V navigation")
else:
    print("X navigation")


sleep(3)