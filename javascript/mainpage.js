let foodHTML = "";

/*let ratingRecipe = food.sort(
  (r1, r2) => (r1.dishRating < r2.dishRating) ? 1 : (r1.dishRating > r2.dishRating) ? -1 : 0)
*/

let nameRecipe = food.sort(function(a, b) {
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
  <div class="food-image-container">
    <img class="food-image" src="assets/food/${food.dishPicture}" />
    <div class="food-info-container">
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-name">${food.dishName}</div>
    </div>
  </div>
  `;
});

document.querySelector(".food-grid").innerHTML = foodHTML;


let dinnerHTML = "";

food.forEach((food) => {
  if (food.dishCategory == "DINNER") {
    dinnerHTML += `
  <div class="food-image-container">
  <img class="food-image" src="assets/food/${food.dishPicture}" />
  <div class="food-info-container">
    <div class="food-category">${food.dishCategory}</div>
    <div class="food-name">${food.dishName}</div>
  </div>
</div>
  `;
  }
});

document.querySelector(".dinner-grid").innerHTML = dinnerHTML;

