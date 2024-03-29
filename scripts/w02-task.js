/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Matthew Oliphant'
// Get the current date
const currentDate = new Date();

const currentYear = currentDate.getFullYear();

console.log("Current Year:", currentYear);
const profilePicture = "images/matt.png";




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
const altText = `Profile image of ${fullName}`;
imageElement.setAttribute("alt", altText);



/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Sushi", "Tacos"];


foodElement.innerHTML = `${favoriteFoods}`;
const anotherFavoriteFood = "Nachos";
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;








