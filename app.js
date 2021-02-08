
// search Button Event 
document.getElementById('search-btn').addEventListener('click', function(){

    const foodName = document.getElementById('search-food').value;
    
    
    searchFood(foodName);
   
    });
    // food search Function

    const searchFood = search => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
    
             foodInfo(data.meals);
            
        })
        .catch(error => alert("Please Search with a valid food name"))
    }

    // search Result function
    const foodInfo = foods => {
        
        const foodData = document.getElementById("searched-food-result");
        foodData.innerHTML = "";

            foods.forEach( food => {
                
                const foodDiv = document.createElement("div");
                foodDiv.className = "food-div";

                const foodInfo = `
                
                    <div class="col" bg-light>
                            <div class="card p-4">
                                <img onclick="foodDetails('${food.strMeal}')" src="${food.strMealThumb}" class="card-img-top" alt="...">
                                    <div class="card-body text-center">
                                        <h5 onclick="foodDetails('${food.strMeal}')" class="card-title">${food.strMeal}</h5>
                                    </div>
                            </div>
                   </div>
                `
                

                foodDiv.innerHTML = foodInfo;
                foodData.appendChild(foodDiv);
            });
    }
    
// Food details Section

const foodDetails = searchFoodDetails => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFoodDetails}`)
        .then(res => res.json())
        .then(data => {
            renderFoodInfo(data.meals[0]);
            
        })
}

// render Food info section

const renderFoodInfo = food => {

    const foodDetail = document.getElementById("food-details");
    foodDetail.style.display = "block";
    const searchedFood = document.getElementById('searched-food-result');
    searchedFood.style.display = "none";
    const SearchBar = document.getElementById('SearchBar');
    SearchBar.style.display ="none";

    foodDetail.innerHTML =
     `
            <div class="card" style="width: 18rem;">
                <img src="${food.strMealThumb}" class="card-img-top p-3">
                    <div class="card-body">
                    <h4 class="card-title text-center">${food.strMeal}</h4>
                        <ul class= "list-group m-3">
                            <li class="list-group-item">${food.strMeasure1}${food.strIngredient1}</li>
                            <li class="list-group-item">${food.strMeasure2}${food.strIngredient2}</li>
                            <li class="list-group-item">${food.strMeasure3}${food.strIngredient3}</li>
                            <li class="list-group-item">${food.strMeasure4}${food.strIngredient4}</li>
                            <li class="list-group-item">${food.strMeasure5}${food.strIngredient5}</li>
                            <li class="list-group-item">${food.strMeasure6}${food.strIngredient6}</li>
                            <li class="list-group-item">${food.strMeasure7}${food.strIngredient7}</li>
                            <li class="list-group-item">${food.strMeasure8}${food.strIngredient8}</li>
                            <li class="list-group-item">${food.strMeasure9}${food.strIngredient9}</li>
                            <li class="list-group-item">${food.strMeasure10}${food.strIngredient10}</li>
                        </ul>
                    </div>
            </div>
    `;


    
}
