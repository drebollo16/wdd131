
// replace with code to select dropdown element out of the HTML
const themeSelector =  document.getElementById('theme-select')

var body = document.body;

function changeTheme() {
//check to see what the current value of our select is. 
//The current value is conveniently found in themeSelector.value!
var selected = themeSelector.value;

// if the value is dark then:
// add the dark class to the body 
//The Classlist in JavaScript property allows you to powerfully manipulate 
//the classes(the group of HTML elements) attached to an HTML Element.
if(selected === 'dark') {
    body.classList.add('dark');

// change the source of the logo to point to the white logo.
// otherwise

} else if(selected === 'white') {

   console.log("White theme")
}
//ARE WE DOING WHITE LOGO TOO????
// remove the dark class
else {
    body.classList.remove('dark');
  
// make sure the logo src is the blue logo.

//logo changed to blue one will go here. 

    }
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener('click', changeTheme);