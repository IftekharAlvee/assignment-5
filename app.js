
document.getElementById('search-btn').addEventListener('click', function(){

    const foodName = document.getElementById('search-food').value;
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => {

        foodInfo(data.meals);
        
        
    })

    const foodInfo = foods => {
        
        const foodData = document.getElementById("searched-food-result");
        foodData.innerHTML = "";

            foods.forEach( food => {
                
                const foodDiv = document.createElement("div");
                foodDiv.className = "food-div";

                const foodInfo = `
                <img onclick="foodDetails('${food.strMeal}')" class="food-img mx-auto" src="${food.strMealThumb}"> 
                <h5 class="food-h5" onclick="foodDetails('${food.strMeal}')"  >${food.strMeal}</h5>
                
                `;

                foodDiv.innerHTML = foodInfo;
                foodData.appendChild(foodDiv);
            });
    }
    
})

const foodDetails = searchFoodDetails => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFoodDetails}`)
        .then(res => res.json())
        .then(data => {
            renderFoodInfo(data.meals[0]);
            console.log(data.meals[0]);
        })
}

const renderFoodInfo = food => {

    const foodDetail = document.getElementById("food-details");
    // foodDetail.style.display = "block";

    foodDetail.innerHTML =
        `
        <img class="food-img ml-5" src="${food.strMealThumb}">
        <ul class= "m-5">
            <li>${food.strMeasure1}${food.strIngredient1}</li>
            <li>${food.strMeasure2}${food.strIngredient2}</li>
            <li>${food.strMeasure3}${food.strIngredient3}</li>
            <li>${food.strMeasure4}${food.strIngredient4}</li>
            <li>${food.strMeasure5}${food.strIngredient5}</li>
            <li>${food.strMeasure6}${food.strIngredient6}</li>
            <li>${food.strMeasure7}${food.strIngredient7}</li>
            <li>${food.strMeasure8}${food.strIngredient8}</li>
            <li>${food.strMeasure9}${food.strIngredient9}</li>
            <li>${food.strMeasure10}${food.strIngredient10}</li>
      </ul>
      `;
}
