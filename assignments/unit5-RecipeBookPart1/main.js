import recipes from './recipes.mjs';

function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<span class="tag">${tag}</span> `;
    });
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
    <section class="recipe">
        <div class="imgRecipes">
            <img src="${recipe.image}" alt="Recipe image">
        </div>
        <div>
            <h2>${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <div class="tags">${tagsTemplate(recipe.tags)}</div>
            <p class="description">${recipe.description}</p>
        </div>
    </section>
    `;
}

function getRandomListEntry(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function renderRecipes(recipeList) {
    const outputElement = document.querySelector('#recipesOutput');
    let html = '';
    recipeList.forEach(recipe => {
        html += recipeTemplate(recipe);
    });
    outputElement.innerHTML = html;
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

document.addEventListener('DOMContentLoaded', init);
