from selenium import webdriver
from selenium.webdriver.chrome.service import  Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select ,WebDriverWait
from selenium.common.exceptions import NoSuchElementException,TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from time import sleep
services =Service(executable_path="../../driver/chromedriver.exe")
options =webdriver.ChromeOptions()
# options.add_argument("headless")
driver=webdriver.Chrome(service=services,options=options)
driver.maximize_window()
driver.get("http://localhost:5173")
#nav elements
buttons_and_links_navigation_button=driver.find_element(By.XPATH,"//a[normalize-space()='Buttons & Links']")
forms_navigation_button=driver.find_element(By.XPATH,"//a[normalize-space()='Forms']")
dropdown_navigation_button=driver.find_element(By.XPATH,"//a[normalize-space()='Dropdowns']")
delays_navigation_button=driver.find_element(By.XPATH,"//a[normalize-space()='Delays']")
checkbox_and_radio_navigation_button=driver.find_element(By.XPATH,"//a[normalize-space()='Checkboxes & Radios']")
mini_project_navigation_button=driver.find_element(By.XPATH,"//a[normalize-space()='Mini-Project']")



#step 1 buttons and links
buttons_and_links_navigation_button.click()
try:
    submit_button=WebDriverWait(driver,10).until(EC.presence_of_element_located((By.XPATH,"//button[@id='submit-btn']")))
    submit_button.click()
    alert1 = driver.switch_to.alert
    alert1.accept()

    submit_a = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//a[normalize-space()='Learn More']")))
    submit_a.click()
    alert2 = driver.switch_to.alert
    alert2.accept()

    print("V Buttons & Links")
except TimeoutException or NoSuchElementException:
    print("element not found")

#step 2 forms
forms_navigation_button.click()
try:
    username_input=WebDriverWait(driver,10).until(EC.presence_of_element_located((By.XPATH,"//input[@id='username']")))
    username_input.send_keys("shalev396")
    username_input = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//input[@id='password']")))
    username_input.send_keys("12345678")
    login_button=WebDriverWait(driver,10).until(EC.presence_of_element_located((By.XPATH,"// button[ @ type = 'submit']")))
    login_button.click()
    form_p=WebDriverWait(driver,10).until(EC.presence_of_element_located((By.XPATH,"/html[1]/body[1]/div[1]/div[1]/div[1]/p[1]")))
    if form_p.text=='Form submitted with: {"username":"shalev396","password":"12345678"}':
        print("V Form")
    else:
        print(form_p.text)

except TimeoutException or NoSuchElementException:
    print("element not found")

#step 3 dropdown
try:
    dropdown_navigation_button.click()
    dropdown_select=Select( driver.find_element(By.XPATH,"//select[@id='country-dropdown']"))
    all_options = dropdown_select.options

    for option in all_options:
        option.click()
        country_p=driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/div[1]/div[1]/p[1]")
        country_p.click()
    print("V Dropdown")
except TimeoutException or NoSuchElementException:
    print("element not found")

#step 4 delays
delays_navigation_button.click()
try:
    slow_p = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH,"//p[normalize-space()='Dynamic Content Loaded!']")))
    print("V Delay")
except TimeoutException or NoSuchElementException:
    print("element not found")
#step 5 checkboxes & radios
checkbox_and_radio_navigation_button.click()
try:
    #checkbox
    is_accept_terms_good = False
    accept_terms_checkbox=WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH,"//input[@type='checkbox']")))
    accept_terms_checkbox.click()
    accept_terms_p=WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH,"/html[1]/body[1]/div[1]/div[1]/div[1]/p[1]")))
    if accept_terms_p.text=="Checkbox is Checked":
        is_accept_terms_good=True

    #radio
    is_options_good = False
    options_radio = WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.XPATH, "//input[@type='radio']")))
    for radio in options_radio:
        radio.click()
        print(radio)
        options_p = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html[1]/body[1]/div[1]/div[1]/div[1]/p[2]")))
        if accept_terms_p.text == "Selected Radio: Option 1":
            is_options_good = True
        else:
            is_options_good =False




except TimeoutException or NoSuchElementException:
    print("element not found")
#

# #step 6 Mini-Project
# mini_project_navigation_button.click()
#
#
#
#
#
#


sleep(2)