import recipes from './recipes.mjs';

/*
const randomNumber = array => 
    array[Math.floor(Math.random() * array.length)];
*/



function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));
//console.log(recipeTemplate(recipe));


/*
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
*/


//Create a function called recipeTemplate that will take a recipe as a parameter,
// and then copy/paste the HTML from index.html in to the function
function recipeTemplate(recipe) {
	return `
      <section class="recipe">
       <div class="imgRecipes">
        <img src="${recipe.image}" alt="Recipe image"></div>
       
    
        <div class="rating" role="img" aria-label="${recipe.rating}">
            <h2>${recipe.name}</h2>
             ${ratingTemplate(recipe.rating)}
        <div class="tags">${tagsTemplate(recipe.tags)}</div>      
        <p class="description">${recipe.description}</p>
    </div>
    </section>
    `;
}


function tagsTemplate(tags) {
    
    // loop through the tags list and transform the strings to HTML
    let html = '';

    tags.forEach(tag => {
        html += `<span class="tag">${tag}</span> `;
    });

    return html;
}

function ratingTemplate(rating) {
  	// begin building an html string using the ratings HTML written earlier as a model.
    let html = `<span 
    class="rating" 
    role="img" 
    aria-label="Rating: ${rating} out of 5 stars">`;

    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
    	
        // check to see if the current index of the loop is less than our rating
        if (i <= rating) {
         	// if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;

    return html;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));


function renderRecipes(recipeList) {
    const outputElement = document.querySelector('#recipesSection');
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

init();



function filter(query) {
	const filtered = recipes.filter(filterFunction)
	// sort by name
    recipe.name.toLowerCase().includes(query)
	const sorted = filtered.sort(sortFunction)
		return sorted

}

const query = 'search term'; // replace with actual search term
console.log(filter(query));

function searchHandler(e) {
	e.preventDefault()
	// get the search input

//    const query = document.querySelector('.search').value.toLowerCase();
    const query = document.querySelector('input[name="search"]').value.toLowerCase();

    const filteredRecipes = filter(query);
    renderRecipes(filteredRecipes);
  // convert the value in the input to lowercase
  // use the filter function to filter our recipes
  // render the filtered list
}

document.querySelector('.image-button').addEventListener('click', searchHandler);
