


function toggleBtn() {
    var toolboxContainer = document.querySelector('.toolbox-container');
    var colorBtns = document.querySelector('.color-container');
    toolboxContainer.classList.toggle('open');
    colorBtns.classList.toggle('color-btn-open');

    console.log("I was clicked!");
  }

//   const contactContainer = document.querySelector('.contact-information');

//   function contactDisplay() {
//       contactContainer.classList.toggle('active');
//       console.log('I AM A BUTTON!');
//   }