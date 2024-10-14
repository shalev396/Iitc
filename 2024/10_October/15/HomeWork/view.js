// 1.
const person = { name: "John", age: 25, city: "New York" };
const { name } = person;
console.log(name);

// 2.
const user1 = { name: "Alice", age: 30, city: "Paris" };
const { age, city } = user1;
console.log(age, city);

// 3.
const employee1 = {
  firstName: "Sarah",
  lastName: "Smith",
  department: "Marketing",
};
const { firstName, lastName } = employee1;
console.log(firstName, lastName);

// 4.
const job = { title: "Developer", company: "Tech Corp" };
const { title: jobTitle } = job;
console.log(jobTitle);

// 5.
const product = { id: 1, price: 100, quantity: 2 };
const { price, quantity } = product;
console.log(price, quantity);

// 6.
const address1 = { street: "123 Main St", city: "Berlin" };
const { country = "Germany" } = address1;
console.log(country);

// 7.
const car = { make: "Toyota", model: "Corolla", year: 2020 };
const { make, model } = car;
console.log(make, model);

// 8.
const coordinates = { x: 10, y: 15, a: 20 };
const { x, y, a } = coordinates;
console.log(x, y, a);

// 9.
const credentials = { username: "user123", password: "secret" };
const { username, password } = credentials;
console.log(username, password);

// 10.
const book = { title: "1984", author: "George Orwell", year: 1949 };
const { title, author } = book;
console.log(title, author);

// 11.
const measurements = { height: 180, weight: 75, bmi: 23 };
const { height, weight } = measurements;
console.log(height, weight);

// 12.
const rectangle = { width: 50, height: 100 };
const { width, height: rectHeight } = rectangle;
console.log(width, rectHeight);

// 13.
const student = { name: "Tom", subject: "Math", grade: "A" };
const { subject, grade } = student;
console.log(subject, grade);

// 14.
const locations = { latitude: 40.7128, longitude: -74.006, altitude: 30 };
const { latitude, longitude } = locations;
console.log(latitude, longitude);

// 15.
const date = { day: 12, month: "October", year: 2024 };
const { day, month } = date;
console.log(day, month);

// 16.
const profile = { username: "jdoe", email: "jdoe@example.com", age: 25 };
const { username: profileUsername, email } = profile;
console.log(profileUsername, email);

// 17.
const address2 = { city: "Los Angeles", state: "California", zip: "90001" };
const { city: city2, state } = address2;
console.log(city2, state);

// 18.
const post = { id: 123, likes: 200, comments: 50 };
const { likes, comments } = post;
console.log(likes, comments);

// 19.
const weather = { temperature: 22, humidity: 65, condition: "Sunny" };
const { temperature, humidity } = weather;
console.log(temperature, humidity);

// 20.
const phone = { brand: "Apple", model: "iPhone 13", price: 999 };
const { brand, model: phoneModel } = phone;
console.log(brand, phoneModel);

// 1.
const data = { profile: { username: "jdoe" }, location: { city: "Paris" } };
const {
  profile: { username: dataUsername },
  location: { city: dataCity },
} = data;
console.log(dataUsername, dataCity);

// 2.
const contact = { firstName: "Emily", lastName: "Clark" };
const {
  firstName: contactFirstName,
  lastName: contactLastName,
  email: contactEmail = "not provided",
} = contact;
console.log(contactFirstName, contactLastName, contactEmail);

// 3.
const obj = { key1: { key2: { key3: "value" } } };
const {
  key1: {
    key2: { key3 },
  },
} = obj;
console.log(key3);

// 4.
const employee2 = {
  role: "Manager",
  department: "HR",
  position: "Head of Department",
};
const { role, department: dept, position: jobTitle2 } = employee2;
console.log(role, dept, jobTitle2);

// 5.
const address3 = {
  city: "San Francisco",
  state: "CA",
  details: { street: "1st Street" },
};
const {
  city: city3,
  state: state3,
  details: { street },
} = address3;
console.log(city3, state3, street);

// 6.
const developer = { name: "John", skills: ["JavaScript", "React", "Node.js"] };
const {
  name: devName,
  skills: [skill1, skill2],
} = developer;
console.log(devName, skill1, skill2);

// 7.
const userProfile = {
  username: "coder",
  country: "USA",
  language: "English",
  timezone: "EST",
};
const {
  username: userUsername,
  country: userCountry,
  language: userLanguage,
} = userProfile;
console.log(userUsername, userCountry, userLanguage);

// 8.
const user2 = { firstName: "Paul", age: 22 };
const { firstName: firstName2, age: age2, city: userCity = "Unknown" } = user2;
console.log(firstName2, age2, userCity);

// 9.
const post2 = { id: 101, tags: ["fun", "javascript", "coding"] };
const {
  id: postId,
  tags: [, secondTag],
} = post2;
console.log(postId, secondTag);

// 10.
const point = { x: 5, y: 10, name: "pointA" };
const { x: pointX, y: pointY, name: pointName, z = 0 } = point;
console.log(pointX, pointY, pointName, z);
