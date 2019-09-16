/*creates an array named pets with the names provided.*/
var pets = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
console.log(pets);

/*writes in the command to remove "Vinny" from the array.*/
pets.splice(5,1)
console.log(pets);

/*writes in the command to remove "Marty" from the array.*/
pets.splice(3,1)
console.log(pets);

/*writes in the command to add "Nancy" to the front of the array.*/
pets.unshift("Nancy")
console.log(pets);

/*writes in the command to add your name to the end of the array.*/
pets.push("Kevin")
console.log(pets);

/*writes in the command that gives the indexOf where "Riley" is located.*/
console.log(pets.indexOf("Riley"));

/*writes in the command that gives the indexOf where "Cindy" is located (this should return-1).*/
console.log(pets.indexOf("Cindy"));

/*creates a new variable called "withMarmaduke" and sets it equal to the original array concatenated with the string "Marmaduke". Outputs this new array variable to the console.*/
var withMarmaduke = pets.concat("Marmaduke")
console.log(withMarmaduke);