
//https://blog.logrocket.com/localstorage-javascript-complete-guide/ 
//Used as reference on how to get local storage

//menu toggle small screen 
document.getElementById('menuToggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    console.log('Menu toggle clicked'); // Debug log
    menu.classList.toggle('open');
});


document.getElementById('gardenerForm').addEventListener('submit', function(event) {
    //sending the form data to a server and reloading the page).
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const profilePicInput = document.getElementById('gardenPic');
    const gardenPic = URL.createObjectURL(profilePicInput.files[0]);
    const date = new Date().toLocaleDateString();

    // Save profile data to localStorage
    //It takes two parameters: a key and a value.  
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    localStorage.setItem('gardenPic', gardenPic);
    localStorage.setItem('date', date);

    displayProfile();
    document.getElementById('gardenerForm').reset();
});

function displayProfile() {
    //getItem() allows you to access the data stored in the browser’s localStorage object
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');
    const gardenPic = localStorage.getItem('gardenPic');
    const date = localStorage.getItem('date');

    const profileHTML = `
        <div class="profile">
            <img src="${gardenPic}" alt="${name}'s profile picture">
            <div>
                <h3>${name}</h3>                
                <p><strong>Date:</strong> ${date}</p>
                <p>${email}</p>
                <p>${message}</p>
            </div>
        </div>
    `;
    document.getElementById('profiles').innerHTML = profileHTML;
}

// Load profile when the page loads
window.addEventListener('load', displayProfile);


