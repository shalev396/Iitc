### **Assignment: Build a "Recipe Manager" App**

**Goal:** Create a fully responsive app where users can manage (add, edit, delete, search, and view) recipes. This app will simulate a real-world scenario where users can organize and explore their favorite recipes.

---

### **Project Requirements**

#### **1\. App Features**

1. **Home Page**  
   * A welcoming page with a banner, a brief description of the app, and a carousel or grid of highlighted recipes.  
   * Include at least one attractive hero image and placeholder content.  
2. **Recipe List Page**  
   * Displays a list of recipes with the following functionalities:  
     * **Add Recipe**: A button that opens a modal form for adding a new recipe.  
     * **Search Recipes**: A search bar with `useSearchParams` for filtering recipes by title.  
     * **Filter by Category**: Dropdown to filter recipes by categories like "Breakfast," "Lunch," "Dinner," etc.  
     * **Delete Recipe**: Each recipe card should have "Delete" options. Show the user confirm modal (see alert-dialog.tsx by shadcn) to confirm this actions.  
3. **Recipe Details Page**  
   * Displays detailed information about a selected recipe, including:  
     * Recipe title, image, category, ingredients, and instructions.  
     * A "Go Back" button as a link to return to the Recipe List page.  
4. **Profile Page**  
   * A simple page where users can view and update their profile information (e.g., name and email). Use React Context to manage the user profile.

---

#### 

#### **2\. Functionalities**

1. **CRUD Operations on Recipes**  
   * Add, edit, delete, and display recipes using a JSON server as the backend.  
2. **Global State Management**  
   * Use React Context to manage user profile details (e.g., name and email).  
   * Bonus: Use Redux with TypeScript for managing recipe data.  
3. **Data Handling**  
   * Use JSON server to store and retrieve recipes.

---

#### **3\. Bonus Features**

1. **Dark Mode**  
   * Implement a dark/light mode toggle using React Context.  
2. **Validation with Zod**  
   * Validate form inputs when adding or editing a recipe.  
3. **Real Backend**  
   * Implement a basic TypeScript backend instead of JSON server.

---

### **Technical Specifications**

1. **Tech Stack**  
   * **Frontend**: React, TypeScript, React Router, Tailwind CSS, shadcn UI.  
   * **Backend** JSON Server (or custom TypeScript backend).  
2. **UI Elements**  
   * **Home Page**: Hero section, carousel/grid for recipes.  
   * **Recipe List**: Recipe cards with image, title, and actions (delete).  
   * **Recipe Details**: Display recipe details. bonus: route as child (modal)  
   * **Profile Page**: user details.  
   * **Filter** **Recipes:** Use whatever… **bonus:** Use sidebar.tsx (see shadcn ui).

3. **Folder Structure**

`src`  
`├── components`  
`│   ├── RecipeCard.tsx`  
`│   ├── RecipeForm.tsx`  
`├── pages`  
`│   ├── Home.tsx`  
`│   ├── Recipes.tsx`  
`│   ├── RecipeDetails.tsx`  
`│   ├── Profile.tsx`  
`├── context`  
`│   ├── ThemeContext.tsx`  
`│   ├── UserProfileContext.tsx`  
`├── App.tsx`  
`└── index.tsx`

3. **Data Structure Example**

`{`  
  `"id": “1”,`  
  `"title": "Chocolate Cake",`  
  `"image": "/images/cake.jpg",`  
  `"ingredients": [`  
    `"2 cups of flour",`  
    `"1 cup of sugar",`  
    `"1/2 cup of cocoa powder"`  
  `],`  
  `"instructions": "Mix ingredients. Bake for 30 minutes.",`  
  `"category": "Dessert"`  
`}`  
