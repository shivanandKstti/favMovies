 const addMovieModal = document.getElementById('add-modal');
 //  console.log(addMovieModal);
 const startAddMovieButton = document.querySelector('header button');
 //  const startAddMovieButton = document.querySelector('header').lastElementChild;
 //  console.log(startAddMovieButton);
 const backdrop = document.getElementById('backdrop');
 //  const backdrop = document.body.firstElementChild;

 const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
 const addMovieButton = addMovieModal.querySelector('.btn--success');
 //  const addMovieButton = cancelAddMovieButton.nextElementSibling; or
 const inpitElements = addMovieModal.querySelectorAll('input');
 //  const inpitElements = addMovieModal.getElementsByTagName('input');


 const toggleBackdrop = () => {
     backdrop.classList.toggle('visible');
 }
 const toggleMovieModal = () => {
     addMovieModal.classList.toggle('visible');
     //  backdrop.classList.toggle('visible'); OR
     toggleBackdrop();
 }
 const cancelAddMovieHandler = () => {
     toggleMovieModal();
 }

 const adMovieHandler = () => {

 }

 const backdropClickHandler = () => {
     toggleMovieModal();
 }

 startAddMovieButton.addEventListener('click', toggleMovieModal);
 backdrop.addEventListener('click', backdropClickHandler);
 cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
 addMovieModal.addEventListener('click', adMovieHandler);