const toggleDiv = document.querySelector('.toggle-bar');
const toggleButton = document.querySelector('#menu-toggle');
const menuCloseButton = document.querySelector('#menu-close');


if(toggleButton){
      toggleButton.addEventListener("click", () => {
            if (toggleDiv.style.left === "0px") {
            toggleDiv.style.left = "-10000px";
            } else {
            toggleDiv.style.left = "0px";
            }
      });
}
 

if(menuCloseButton){
      menuCloseButton.addEventListener( 'click', () => {
         toggleDiv.style.left="-10000px";
      });
}