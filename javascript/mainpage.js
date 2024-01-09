let foodHTML = "";

/*let ratingRecipe = food.sort(
  (r1, r2) => (r1.dishRating < r2.dishRating) ? 1 : (r1.dishRating > r2.dishRating) ? -1 : 0)
*/

let nameRecipe = food.sort(function (a, b) {
  const nameA = a.dishName.toUpperCase();
  const nameB = b.dishName.toUpperCase();
  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }

  return 0;
});

food.forEach((food) => {
  foodHTML += `
  <a class="food-image-container" href='https://emiliaahl.github.io/recipecollection/${food.dishLink}.html' >
    <img class="food-image" src="assets/food/${food.dishPicture}" />
    <div class="food-info-container">
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-name">${food.dishName}</div>
    </div>
  </a>
  `;
});

document.querySelector(".food-grid").innerHTML = foodHTML;

//Dinner
let dinnerHTML = "";

food.forEach((food) => {
  if (food.dishCategory == "DINNER") {
    dinnerHTML += `
    <a class="food-image-container" href='https://emiliaahl.github.io/recipecollection/${food.dishLink}.html' >
    <img class="food-image" src="assets/food/${food.dishPicture}" />
    <div class="food-info-container">
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-name">${food.dishName}</div>
    </div>
  </a>
  `;
  }
});

document.querySelector(".dinner-grid").innerHTML = dinnerHTML;

//Lunch
let lunchHTML = "";

food.forEach((food) => {
  if (food.dishCategory == "LUNCH") {
    lunchHTML += `
    <a class="food-image-container" href='https://emiliaahl.github.io/recipecollection/${food.dishLink}.html' >
    <img class="food-image" src="assets/food/${food.dishPicture}" />
    <div class="food-info-container">
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-name">${food.dishName}</div>
    </div>
  </a>
  `;
  }
});

document.querySelector(".lunch-grid").innerHTML = lunchHTML;

//Breakfast
let breakfastHTML = "";

food.forEach((food) => {
  if (food.dishCategory == "BREAKFAST") {
    breakfastHTML += `
    <a class="food-image-container" href='https://emiliaahl.github.io/recipecollection/${food.dishLink}.html' >
    <img class="food-image" src="assets/food/${food.dishPicture}" />
    <div class="food-info-container">
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-name">${food.dishName}</div>
    </div>
  </a>
  `;
  }
});

document.querySelector(".breakfast-grid").innerHTML = breakfastHTML;

//Snack
let snackHTML = "";

food.forEach((food) => {
  if (food.dishCategory == "SNACK") {
    snackHTML += `
    <a class="food-image-container" href='https://emiliaahl.github.io/recipecollection/${food.dishLink}.html' >
    <img class="food-image" src="assets/food/${food.dishPicture}" />
    <div class="food-info-container">
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-name">${food.dishName}</div>
    </div>
  </a>
  `;
  }
});

document.querySelector(".snack-grid").innerHTML = snackHTML;

//Tillbehör
let extraHTML = "";

food.forEach((food) => {
  if (food.dishCategory == "TILLBEHÖR") {
    extraHTML += `
    <a class="food-image-container" href='https://emiliaahl.github.io/recipecollection/${food.dishLink}.html' >
    <img class="food-image" src="assets/food/${food.dishPicture}" />
    <div class="food-info-container">
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-name">${food.dishName}</div>
    </div>
  </a>
  `;
  }
});

document.querySelector(".extra-grid").innerHTML = extraHTML;

//Efterrätt
let efterHTML = "";

food.forEach((food) => {
  if (food.dishCategory == "EFTERRÄTT") {
    efterHTML += `
    <a class="food-image-container" href='https://emiliaahl.github.io/recipecollection/${food.dishLink}.html' >
    <img class="food-image" src="assets/food/${food.dishPicture}" />
    <div class="food-info-container">
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-name">${food.dishName}</div>
    </div>
  </a>
  `;
  }
});

document.querySelector(".efter-grid").innerHTML = efterHTML;