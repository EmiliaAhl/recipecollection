let foodHTML = "";

food.forEach((food) => {
  foodHTML += `
  <div class="food-image-container">
  <img class="food-image" src="assets/${food.dishPicture}" />
  <div class="food-info-container">
    <div class="food-category">${food.dishCategory}</div>
    <div class="food-name">${food.dishName}</div>
  </div>
</div>
  `;
});

document.querySelector(".food-grid").innerHTML = foodHTML;

/*
let dinnerHTML = "";

food.forEach((food) => {
  if (food.dishCategory == "DINNER") {
    dinnerHTML += `
  <div class="food-image-container">
  <img class="food-image" src="assets/${food.dishPicture}" />
  <div class="food-info-container">
    <div class="food-category">${food.dishCategory}</div>
    <div class="food-name">${food.dishName}</div>
  </div>
</div>
  `;
  }
});

document.querySelector(".dinner-grid").innerHTML = dinnerHTML;
*/
