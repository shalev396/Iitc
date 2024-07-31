"use strict";
//1.
//create object named person that includes name, age, isStudent and update and log some of them
let person = {
  name: "shalev",
  age: 21,
  isStudent: false,
};
person.isStudent = true;
console.log(person.name + " " + person.age);
console.log(person);
//2.
//create object named car that includes make, model, year and update and log some of them
let car = {
  make: "kia",
  model: "sportage",
  year: "2022",
};
console.log(car.make);
console.log(car.model);
car.year = "2024";
console.log(car);
//3.
//create object called fruit with properties: name (string), color
let fruit = {
  name: "strawberry",
  color: "red",
  sweetness: 8,
};
console.log(fruit.name + " " + fruit.sweetness);
fruit.color = "green";
console.log(fruit);
//4.
//Create an object called book with properties: title (string), author (string), and pages (number).
let book = {
  title: "js tutorial",
  author: "lirone",
  pages: 9999,
};
console.log(book.author);
book.pages += 50;
console.log(book.pages);
let book1 = {
  title: "book1",
  author: "jone",
  pages: 100,
};
let book2 = {
  title: "book2",
  author: "jone",
  pages: 200,
};
let book3 = {
  title: "book3",
  author: "jone",
  pages: 300,
};
let book4 = {
  title: "book4",
  author: "jone",
  pages: 400,
};
//5.
//Create an object called animal with properties: species (string), sound (string), and isWild (boolean).
let animal = {
  spicies: "dog",
  sound: "bark",
  isWild: false,
};
console.log(animal.sound);
animal.isWild = true;
console.log(animal);
//6.
//Create an object called smartphone with properties: brand (string), model (string), and storageGB (number)
let smartPhone = {
  brand: "apple",
  model: "iphone 13 min",
  storageGB: "1024",
};
console.log(smartPhone.storageGB);
smartPhone.model = "iphone 14";
console.log(smartPhone);
//7.
//Create an object called recipe with properties: name (string), ingredients (array), and preparationTime (number in minutes).
let recipe = {
  name: "baked potatos",
  ingridians: ["potatos", "cheese"],
  preperationTime: 20,
};
console.log(recipe.ingridians[1]);
recipe.ingridians.push("beans");
console.log(recipe);
//8.
//Create an object called movie with properties: title (string), director (string), and releaseYear (number).
let movie = {
  title: "Deadpool",
  director: "jone",
  releaseYear: 2024,
};
console.log(movie.title + " " + movie.director);
movie.year = 2025;
console.log(movie.year);
//9.
//Create an object called country with properties: name (string), capital (string), and population (number).
let country = {
  name: "israel",
  capital: "jerusalem",
  population: 8000000,
};
console.log(country.capital);
country.population += 1000000;
console.log(country.population);
//10.
//Create an object called `computer` with properties: brand (string), CPU (string), and RAMinGB (number).
let computer = {
  brand: "Asus",
  cpu: "i7-7700HQ",
  RAMinGB: 32,
};
console.log(computer.cpu + " " + computer.brand);
computer.RAMinGB *= 2;
console.log(computer.RAMinGB);
// /Returns the number of milliseconds since midnight Jan 1, 1970
console.log(Date.now());
//11.Create an object called playlist with properties: name (string), songs (array of strings), and duration (number in minutes).
let playList = {
  name: "my playlist",
  songs: ["animals", "maps"],
  duration: 9,
};
playList.songs.push("gangam style");
console.log(playList.duration / playList.songs.length);
//12.Create an object called bankAccount with properties: accountNumber (string), balance (number), and isActive (boolean).
let bankAccount = {
  accountNumber: "101010",
  balance: 5000,
  isActive: true,
};
function deposit(amount) {
  bankAccount.balance += amount;
}
function withdraw(amount) {
  if (bankAccount.witdraw >= amount) {
    bankAccount.balance -= amount;
  }
}
deposit(100);
withdraw(100);
//13Create an object called circle with properties: radius (number) and color (string).
let circle = {
  radius: 1,
  color: "blue",
  calculatedArea: function (params) {
    return Math.pow(circle.radius) * Math.PI;
  },
  calculateCircumference: function () {
    return 2 * Math.PI * circle.radius;
  },
};
circle.calculatedArea();
circle.calculateCircumference();
//14.Create an object called student with properties: name (string) and grades (array of numbers).
let student = {
  name: "shalev",
  grades: [100, 90, 100],
  calculateAverage: function () {
    let sum = 0;
    for (let i = 0; i < student.grades.length; i++) {
      sum += student.grades[i];
    }
    return sum / student.length;
  },
  getLetterGrade: function () {
    if (calculateAverage() >= 90) return "A";
    else if (calculateAverage() >= 80) return "B";
    else if (calculateAverage() >= 70) return "C";
    else if (calculateAverage() >= 60) return "D";
    else return "F";
  },
};
console.log(student.calculateAverage());
console.log(student.getLetterGrade());
//15.Create an object called todoList with properties: tasks (array of strings) and completedTasks (array of strings).
let todoList = {
  tasks: ["task 1", "task 2"],
  completedTask: ["task 3", "task 4"],
  addTask: function (task) {
    todoList.tasks.push(task);
  },
  completedTask: function (task) {
    for (let i = 0; i < todoList.tasks.length; i++) {
      if (todoList.tasks[i] === task) {
        todoList.completedTask.push(todoList.tasks.pop());
      } else {
        todoList.completedTask.push(task);
      }
    }
  },
};
//16.Create an object called book with properties: title (string), author (string), isbn (string), and isAvailable (boolean).
let book5 = {
  title: "book5",
  author: "shalev",
  isAvailable: true,
  checkOut: function () {
    book5.isAvailable = false;
  },
  return: function () {
    book5.isAvailable = true;
  },
};
//17.Create an object called colorMixer with properties: color1 (string) and color2 (string).
let colorMixer = {
  color1: "red",
  color2: "blue",
  mix: function () {
    if (colorMixer.color1 === "red" && colorMixer.color2 === "blue") {
      return "purple";
    }
  },
};
//18.Create an object called tempConverter with properties: celsius (number) and fahrenheit (number).
let tempConverter = {
  celsius: 1,
  fahrenheit: 1,
  setC: function (temp) {
    tempConverter.celsius = temp;
    tempConverter.fahrenheit = (temp * 9) / 5 + 32;
  },
  setF: function (temp) {
    tempConverter.celsius = ((temp - 32) * 5) / 9;
    tempConverter.fahrenheit = temp;
  },
  getC: function () {
    return tempConverter.celsius;
  },
  getF: function () {
    return tempConverter.fahrenheit;
  },
};
//19Create an object called pet with properties: name (string), type (string), hunger (number), and happiness (number).
let pet = {
  name: "simba",
  type: "dog",
  hunger: 5,
  happiness: 100,
  feed: function () {
    this.hunger--;
  },
  play: function () {
    this.happiness++;
  },
  getStatus: function () {
    for (let i = 0; i < Object.keys(pet).length; i++) {
      `${Object.keys(pet)[i].valueOf(pet)}:${Object.values(pet)[i].valueOf(
        pet
      )}`;
    }
  },
};
//20Create an object called quiz with properties: questions (array of objects) and score (number).
let question = {
  name: "color of sky",
  optionArray: ["red", "green", "blue", "yellow"],
  correctAnswer: 3,
};
let objArray = [question];
question = {
  name: "2+2=",
  optionArray: [1, 2, 3, 4],
  correctAnswer: 4,
};
objArray.push(question);
let quiz = {
  questionArray: objArray,
  score: 0,

  askQuestion: function (index) {
    {
      console.log(quiz.questionArray[index].name);
      for (let j = 0; j < quiz.questionArray[index].length; j++) {
        console.log(quiz.questionArray[index][i]);
      }
      return prompt("please enter the index of the answer");
    }
  },
  checkAnswer: function (index, answer) {
    if (index === answer) {
      this.score++;
    }
  },
};
for (let i = 0; i < quiz.questionArray.length; i++) {
  quiz.checkAnswer(quiz.askQuestion(), i);
}
//21.Create an object called inventory with properties: items (array of objects) where each item has name (string) and quantity (number).
let item = {
  name: "iphone",
  quantity: 20,
};
let itemArray = [item];
item = new {
  name: "galaxy",
  quantity: 20,
}();
itemArray.push(item);
item = new {
  name: "airpods",
  quantity: 20,
}();
itemArray.push(item);
let inventory = {
  items: itemArray,
  addItem: function (name, quantity) {
    item = new {
      name: name,
      quantity: quantity,
    }();
  },
  removeItem: function (name, quantity) {
    for (let i = 0; i < inventory.items.length; i++) {
      if (inventory.items[i].name === name) {
        if (inventory.items[i] - quantity <= 0) {
          inventory.items.splice(i);
        } else {
          inventory.items[i].quantity -= quantity;
        }
      }
    }
  },
  checkStock: function (name) {
    for (let i = 0; i < inventory.items.length; i++) {
      if (inventory.items[i].name === name) {
        return inventory[i].quantity;
      } else return false;
    }
  },
};
