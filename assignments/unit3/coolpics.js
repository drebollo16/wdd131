document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
   
    // Toggle menu for small screens
    function toggleMenu() {
      menu.classList.toggle("hide");
    }
  
    menuButton.addEventListener("click", toggleMenu);
  
    // Handle resizing window to show/hide menu
    function handleResize() {
      if (window.innerWidth > 575) {
        menu.classList.remove("hide");
      } else {
        menu.classList.add("hide");
      }
    }

    //Call the handleResize function immediately when the page loads as well.
    handleResize();
    window.addEventListener("resize", handleResize);



    
    // Function to generate viewer template
    function viewerTemplate(pic, alt) {
        return `<div class="viewer">
          <button class="close-viewer">X</button>
          <img src="${pic}" alt="${alt}">
          </div>`;
    }
      
    function viewHandler(event) {
        // Create a variable to hold the element that was clicked on from event.target
        const element = event.target;
    
        // Get the src attribute from that element and 'split' it on the "-"
        const src = element.src.split("-");
    
        // Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        const newSrc = src[0] + "-full.jpeg";
    
        // Insert the viewerTemplate into the top of the body element
        const alt = element.alt;
        const htmltoinsert = viewerTemplate(newSrc, alt);
        // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        document.body.insertAdjacentHTML("afterbegin", htmltoinsert);
    
        //Write the closeViewer function that will remove the viewer div from the DOM when clicked.
        function closeViewer() {
            //create viwer to call viewer to close
            const viewer = document.querySelector(".viewer");
            //when click remove 
            viewer.remove();
        }


        // Add a listener to the close button (X) that calls a function called closeViewer when clicked
        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
    

    //Add an event listener to the .gallery section of your HTML page.
    // It should watch for a click, and use a function called viewHandler as the event handler function.
    const gallery = document.querySelector(".coolpics");
    gallery.addEventListener("click", viewHandler);
    
   
     
});
