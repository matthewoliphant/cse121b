/* LESSON 4 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Matthew Oliphant",
    photo: "images/matt.png",
    favoriteFoods: [
      "Steak",
      "Shrimp",
      "Pasta",
      "Orange Chicken",
      "Mango",
    ],
    hobies: [
      "Watch Movies",
      "Play Basketball and Tennis",
      "Hangout with Friends and Family",
    ],
    placesLived: [],
  };
  
  /* Populate Profile Object with placesLive objects */
  myProfile.placesLived.push(
    {
      place: "Benton, Arkansas",
      length: "2 years",
    },
    {
      place: "Kansas City, Missouri",
      length: "6 years",
    },
    {
      place: "Gull Lake, Michigan",
      length: "4 years",
    },
    {
      place: "Saint Louis, Missouri",
      length: "7 years",
    }
  );
  
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector("#name").textContent = myProfile.name;
  
  /* Photo with attributes */
  
  const imageElement = document.querySelector("img");
  imageElement.setAttribute("scr", myProfile.photo);
  imageElement.setAttribute("alt", `Profile of ${myProfile.name} `);
  
  /* Favorite Foods List*/
  
  myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.innerHTML = food;
    document.querySelector("#favorite-foods").appendChild(li);
  });
  
  /* Hobbies List */
  myProfile.hobies.forEach((hobi) => {
    let li = document.createElement("li");
    li.innerHTML = hobi;
    document.querySelector("#hobbies").appendChild(li);
  });
  
  /* Places Lived DataList */
  
  myProfile.placesLived.forEach((place) => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.innerHTML = place.place;
    dd.innerHTML = place.length;
  
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
  });