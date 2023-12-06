   // Get the filter buttons
   const filterItems = document.querySelectorAll(".filter-item");

   // Loop through the buttons and add click event listener
   filterItems.forEach(item => {
     item.addEventListener("click", function(){
       // Remove the active class from the previous button
       filterItems.forEach(item => item.classList.remove("active"));
       // Add the active class to the current button
       this.classList.add("active");
       // Get the data-filter attribute of the button
       const filterValue = this.getAttribute("data-filter");
       // Get the gallery items
       const galleryItems = document.querySelectorAll(".gallery-item");
       // Loop through the gallery items and show or hide them based on the filter value
       galleryItems.forEach(item => {
         if (filterValue === "all" || item.getAttribute("data-category") === filterValue){
           // Show the item
           item.style.display = "block";
           item.classList.add("show");
         } else {
           // Hide the item
           item.style.display = "none";
           item.classList.remove("show");
         }
       });
     });
   });