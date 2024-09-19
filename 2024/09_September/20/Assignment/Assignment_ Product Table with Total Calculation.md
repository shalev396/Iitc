### **Assignment: Product Table with Total Calculation**

**Objective:**  
Create an interactive product table using Vanilla JavaScript, HTML, and CSS. The table should allow users to add products, adjust their quantities, and see the total cost in real-time.

#### **Requirements:**

1. **Basic Structure**  
   * The page should have a table that initially contains no products.  
   * Each row in the table should represent a product with the following columns:  
     * Product Name  
     * Product Price  
     * Amount (quantity)  
     * Total (Product Price \* Amount)  
     * Remove Button  
   * The table should have a footer or a separate row at the bottom showing the total price of all products in the table.  
2. **Product List**  
   * Below the table, there should be a list of products available for adding to the table. Each product in this list should display its name and price.  
   * Include a button next to each product that allows the user to add that product to the table.  
3. **Adding Products to the Table**  
   * When the user clicks the "Add" button next to a product in the product list, a new row should be added to the table with that product's name, price, and an initial amount of 1\.  
   * If the product already exists in the table, clicking "Add" again should simply increase its amount by 1, rather than adding a new row.  
4. **Adjusting Product Amount**  
   * Each row in the table should include controls to increase or decrease the amount of the product.  
   * If the amount changes, the total for that product (Product Price \* Amount) should be updated automatically.  
   * The overall total price at the bottom of the table should also update automatically whenever a product's amount changes.  
5. **Removing Products**  
   * Each row in the table should have a "Remove" button to remove the product from the table entirely.  
   * Removing a product should also update the overall total price.  
6. **Calculating Total Price**  
   * Display the total price at the bottom of the table. This should be the sum of all product totals (i.e., sum of all rows' "Total" values).  
   * Ensure that this total updates in real-time as products are added, amounts are adjusted, or products are removed.  
7. **Visual Styling**  
   * Style the table, product list, and controls using CSS to make the interface clean and user-friendly.  
   * Highlight the total price section to make it easily noticeable.  
8. **No External Libraries**  
   * Use only Vanilla JavaScript, HTML, and CSS. No external libraries or frameworks (like jQuery, React, etc.) are allowed.  
9. **Code Organization**  
   * Write clean, well-organized code. Use functions to handle different actions (e.g., adding products, updating amounts).  
   * Include comments to explain your code where necessary.

#### **Bonus Features (Optional):**

* **Persistence:** Save the table state in the browser's local storage so that it persists across page reloads.  
* **Sorting:** Add functionality to sort the products in the table by name, price, or total.

// List of available products with names and prices  
const products \= \[  
  { id: 1, name: 'Laptop', price: 1000 },  
  { id: 2, name: 'Smartphone', price: 600 },  
  { id: 3, name: 'Headphones', price: 100 },  
  { id: 4, name: 'Keyboard', price: 50 },  
  { id: 5, name: 'Mouse', price: 30 },  
  { id: 6, name: 'Monitor', price: 300 },  
  { id: 7, name: 'Printer', price: 150 },  
  { id: 8, name: 'Webcam', price: 80 },  
  { id: 9, name: 'USB Cable', price: 10 },  
  { id: 10, name: 'External Hard Drive', price: 120 },  
\];

