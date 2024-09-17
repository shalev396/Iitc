### **Home Assignment: Exploring the DOM**

**Objective:**  
This assignment is designed to reinforce your understanding of various aspects of the DOM. You will complete multiple small tasks that cover different parts of the DOM, from selecting elements to manipulating them and handling events.

---

### **Task 1:**

**Goal:**  
Learn how to select and traverse DOM elements using various methods.

**Instructions:**

1. Create an HTML file (`index.html`) with the following elements:  
   * A `<div>` with the ID `content` containing 3 `<p>` elements with the class `text`.  
   * A `<ul>` list with the ID `list` containing at least 5 `<li>` items.  
   * A button with the text "Highlight List Items".  
2. In your JavaScript file (`script.js`):  
   * Use `getElementById` to select the `content` div and change its background color to light blue.  
   * Use `querySelectorAll` to select all elements with the class `text` and change their text color to red.  
   * Use `querySelectorAll` and `for` loop to loop through each `<li>` item in the list and log its text content to the console.  
   * Add an event listener to the button that highlights all `<li>` items by changing their background color to yellow when clicked.

**Expected Outcome:**

* The `content` div's background changes to light blue.  
* All paragraph texts within the `content` div turn red.  
* When the button is clicked, all `<li>` items' background colors change to yellow.

---

### 

### 

### 

### **Task 2:**

**Goal:**  
Learn how to create, modify, and remove elements in the DOM.

**Instructions:**

1. Create another section in your HTML file with an empty `<ul>` element and a button labeled "Add Item".  
2. In your JavaScript file:  
   * Write a function that creates a new `<li>` element with the text "New Item" and appends it to the `<ul>` each time the "Add Item" button is clicked.  
   * Write a function to select item when clicking on it (the item). the selected item should have class “selected” and the text should be bold.  
     ***note: there should be only one selected item in any current time.***  
   * Add “Remove First Item” button. it should remove the first item.  
   * Add “Remove Last Item” button. it should remove the last item.  
   * Add “Remove Selected Item” button. it should remove the selected item.

   

---

### **Task 3: DOM Events and Callbacks**

**Goal:**  
Understand how to handle DOM events using callback functions.

**Instructions:**

1. Add an input field with the ID `nameInput` and a `<div>` with the ID `greeting` in your HTML.  
2. In your JavaScript file:  
   * Attach an `input` event listener to the `nameInput` field.  
   * Write a callback function that updates the `greeting` div to display "Hello, \[name\]\!" where `[name]` is the current value of the input field.  
   * Create a button with the text "Clear" that, when clicked, clears the input field and resets the greeting.

**Expected Outcome:**

* As the user types in the input field, the greeting message updates in real-time.  
* Clicking the "Clear" button empties the input field and clears the greeting message.

---

### 

### **Task 4: Styling with the DOM**

**Goal:**  
Dynamically change the styles of DOM elements.

**Instructions:**

1. Add a `<div>` with the ID `box` and a button with the text "Change Style" to your HTML file.  
2. In your JavaScript file:  
   * Use JavaScript to give the `box` a default style: width of 100px, height of 100px, and a border.  
   * Attach an event listener to the "Change Style" button that changes the `box` to:  
     * Double its width and height.  
     * Change its border color to a random color each time the button is clicked.  
   * Ensure the box doesn't exceed 300px in width or height.

**Expected Outcome:**

* Clicking the "Change Style" button resizes and changes the color of the box's border randomly, but the size does not exceed 300px.

### **Task 5: Dynamic Event Listeners for Multiple Buttons**

**Instructions:**

1. **HTML Setup:**  
   * Create 5 buttons in your HTML, each with the text "Click Me".  
2. **JavaScript Implementation:**  
   * Add an event listener to each button so that when clicked, it displays an alert with a number (1 to 5\) corresponding to the button that was clicked.  
   * Use a `for` loop to add these event listeners, so you avoid repeating code.  
   * You can select the buttons in any way you prefer (e.g., by getting their parent element, assigning them the same class and using `querySelectorAll`, etc.).

**Expected Outcome:**

* Clicking the first button shows an alert with "1", the second button shows "2", and so on up to "5".

