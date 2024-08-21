### **code:**

### [https://github.com/Omer-Mazig/simple-express-inclass.git](https://github.com/Omer-Mazig/simple-express-inclass.git)

**slide:**

### https://docs.google.com/presentation/d/1oyx6iZ2bd0idxtINrI2PXYtHDktm7hxkM7pmnyVoRJo/edit\#slide=id.g2f45f38397f\_0\_131

### **Assignment: Building a Simple Express Server**

**Objective:**  
To create a basic Express server that responds to HTTP requests.

**Requirements:**

1. **Initialize a Node.js project:**  
   * Create a new folder for your project.  
   * Initialize a Node.js project using `npm init -y`.  
   * Install Express using `npm install express`.  
2. **Create an Express Server:**  
   * Inside your project folder, create a file named `server.js`.  
   * Import Express and create a basic Express server.  
   * Make the server listen on port 3000\.  
3. **Define Routes:**  
   * Create the following routes:  
     * **GET `/`:** Respond with the message "Welcome to my basic Express server\!".  
     * **GET `/about`:** Respond with a brief message about yourself (e.g., "This server was created by \[Your Name\]").  
     * **GET `/contact`:** Respond with a JSON object containing your email and phone number.  
     * **GET `/api/products`:** Respond with a JSON array of products. Each product should have an `id`, `name`, and `price`.  
4. **Run and Test the Server:**  
   * Run the server using `node server.js`.  
   * Test the routes in your browser or using a tool like Postman.  
   *   
* **Dynamic Route:**  
  Add a dynamic route for product details. Create a route `GET /api/products/:id` that responds with the details of a specific product based on the `id` provided in the URL.

**Submission:**

* Submit the link to your GitHub repository containing the project files.

// fake-database.js

const products \= \[

 { id: "1", name: "Laptop", price: 1200 },

 { id: "2", name: "Smartphone", price: 800 },

 { id: "3", name: "Headphones", price: 150 },

 { id: "4", name: "Keyboard", price: 75 },

 { id: "5", name: "Monitor", price: 300 },

\];

function getProducts() {

 return products;

}

function getProductById(id) {

 let product \= null;

 for (let i \= 0; i \< products.length; i\++) {

   if (products\[i\].id \=== id) {

     product \= products\[i\];

   }

   return product;

 }

}

module.exports \= {

 getProducts,

 getProductById,

};

