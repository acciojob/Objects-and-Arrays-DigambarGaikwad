const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};


const team = players;
const team1 = [...players]; // Using spread operator to create a copy of players array

const cap1 = { ...person }; // Using spread operator to create a copy of person object

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;





/*
const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

const team = players;
const team1 = [...players]; // Using spread operator to create a copy of players array

const cap1 = { ...person }; // Using spread operator to create a copy of person object

// // Testing the variables
// console.log(team);   // Output: ["John", "Bob", "Alice", "Poppy"]
// console.log(team1);  // Output: ["John", "Bob", "Alice", "Poppy"]
// console.log(cap1);   // Output: { name: "John Doe", age: 80 }
*/