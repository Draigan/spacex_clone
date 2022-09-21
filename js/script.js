let overlayIsOn = false;

const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const menuLink = document.getElementById('menu-link');

btn.addEventListener('click', navToggle);


function
navToggle()
{
    overlayIsOn = !overlayIsOn;
    overlayIsOn ? overlay.classList = 'overlay-show' : overlay.classList = 'overlay-unshow';
    //overlayIsOn ? overlay.classList = 'mobile-main-menu ul li' : overlay.classList = 'overlay-unshow';
    btn.classList.toggle('open');
   document.body.classList.toggle('stop-scrolling');
   mobileMenu.classList.toggle('mobile-hide');

   for (let i = 1; i < 6; i++)
   {

     document.getElementById(`menu-link${i}`).classList.toggle(`animation${i}`); 
  
   }
   menuLink.classList.toggle('animation');
}
