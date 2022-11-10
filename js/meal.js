const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const loadSearchedFood = () => {
    const searchFood = document.getElementById('search-food');
    const meal = searchFood.value;
    loadMeal(meal);
    searchFood.value = '';
}

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title text-center">${meal.strMeal}</h4>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        `;
        mealsContainer.appendChild(div);
    })
}

loadMeal('');