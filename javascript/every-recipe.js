let foodHTML = "";

food.forEach((food) => {
  foodHTML += `
  <a href="https://emiliaahl.github.io/recipecollection/${food.dishLink}.html">
  <div class="food-image-container">
    <div>
      <div class="food-time">
        <img class="food-time-image" src="assets/general/clock-icon.png">
        <div class="food-time-text">${food.dishTime.amount} ${food.dishTime.unit}</div>
      </div>
      <div class="food-rating">${food.dishRating} &#9733; </div>
      <img class="food-image" src="assets/food/${food.dishPicture}">
    </div>
    <div class="food-info-container">
      <div class="food-name">${food.dishName}</div>
      <div class='food-portion'>(${food.dishPortions} port)</div>
      <div class="food-category">${food.dishCategory}</div>
      <div class="food-ingredients">
        You will need: ${food.dishIngredients}
      </div>
      <div>

      </div>
    </div>
  </div>
</a>
  `;
});

document.querySelector(".food-list").innerHTML = foodHTML;



function search_recipe() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('food-name');
  let y = document.getElementsByClassName('food-image-container')
  let z = document.getElementsByClassName('food-ingredients')
 
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input) && !z[i].innerHTML.toLowerCase().includes(input)) {
      y[i].style.display = "none";
    }
    else {
      y[i].style.display = "grid";
    }
  }
}