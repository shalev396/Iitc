"use strict";
//create object named person that includes name, age, isStudent and update and log some of them
let person = {
  name: "shalev",
  age: 21,
  isStudent: false,
};
person.isStudent = true;
console.log(person);
console.log(person.isStudent);
//create object named car that includes make, model, year and update and log some of them
let car = {
  make: "kia",
  model: "sportage",
  year: "2022",
  printCar: function () {
    console.log(
      `make:${car.make},model:${car.model},year:${car.year},color:${car.color}`
    );
  },
};
console.log(car.make);
console.log(car.model);
car.color = "white";
car.year = "2024";
car.printCar();

for (let i = 0; i < Object.keys(car).length; i++) {
  console.log(
    `${Object.keys(car)[i].valueOf(car)}:${Object.values(car)[i].valueOf(car)}`
  );
}
let person1 = {
  name: "shalev",
  age: 21,
  isStudent: false,
};
console.log(Object.keys(person));
console.log(car.year);
//create object named computer that includes my computer detail and log some of them
let computer = {
  name: "GAMER-A",
  cpu: "i7-7700HQ",
  ram: 32768, //mb
  gpu: "GTX 1060",
  vram: 6029, //mb
  model: "GL504VM",
  opSystem: "Windows 10",
  displayResolution: "1920 x 1080",
};
console.log(computer);
