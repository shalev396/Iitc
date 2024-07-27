//Text-Based Adventure Game
//1.
let score;
let health;
//2.
function setup() {
  return prompt("what is your name");
  score = 0;
  health = 100;
}
//3.
function Choices(choice1, choice2) {
  let isCorrect = false;
  let text = prompt(`${choice1} or ${choice2}`);
  while (!isCorrect) {
    if ((text === choice1, text === Choice2)) {
      return text;
    }
  }

  return;
}
//3.
function room1() {
  console.log("you are in the first room");
  console.log("you have found a rare artifact");
  console.log(
    "you found a stick on the ground and picked it up inventory currently hold a stick,"
  );
  let choice = Choices("grab it", "poke it");
  if (choice === "grab it") {
    health -= 50;
    console.log(
      "you grabed it and triggered a trap that shoot an arrow at your arm"
    );
  } else {
    score += 50;
    console.log(
      "you poke the artifact it broke and triggered a trap , an arrow hit your stick and broke it"
    );
  }
}
function room2() {
  console.log("you are in the second room");
  console.log("you are in a narrow nad long room with bunch of spider web");
  console.log("you can try to burn the with one of the torches off the wall");
  let choice = Choices("burn it", "do not burn");
  if (choice === "burn it") {
    score += 50;
    console.log("you burn all of the spider web now you can go freely");
  } else {
    health -= 50;
    console.log("you go in and get bit by a non deadly toxic spider");
  }
}
function room3() {
  if (health > 0) {
    console.log("you are in the third room");
    console.log(
      "you are in a large with a gold sword in the middle and a bunch of knights statues around it"
    );
    console.log(
      "you here noises  all of the knights woke up and try to kill you"
    );
    let choice = Choices("grab sword", "run");
    let ramdom = Math.random();
    if (choice === "grab") {
      if (ramdom > 0.5) {
        score += 100;
        console.log("you destroy them with the sword and go to the exit");
      } else {
        score += 50;
        health -= 100;
        console.log("you died in the fight");
      }
    } else {
      health -= 100;
      console.log("the knight caches you and kills you");
    }
  }
}
//4.
setup();
room1();
room2();
room3();
end(name, score, health);
function end(name, score, health) {
  if (health > 0) {
    console.log(
      `congratulation ${name} you completed the tample with ${health} health points and a score of ${score}`
    );
  }
  console.log(`hello ${name} you have died with a score of ${score}`);
}
