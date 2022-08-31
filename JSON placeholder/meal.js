const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {

    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText = ` `;
    for (const meal of meals) {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                        </div>
                    </div>
        `;
        mealContainer.appendChild(mealDiv)
    }
};

const searchMeal = () => {
    const searchBtn = document.getElementById('search-feild');
    searchBtnText = searchBtn.value;
    loadMeals(searchBtnText);
    searchBtn.value = '';
};
loadMeals();