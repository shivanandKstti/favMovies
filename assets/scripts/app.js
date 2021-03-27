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
 const userInputs = addMovieModal.querySelectorAll('input');
 //  const inpitElements = addMovieModal.getElementsByTagName('input');

 const movies = [];

 const toggleBackdrop = () => {
     backdrop.classList.toggle('visible');
 }
 const toggleMovieModal = () => {
     addMovieModal.classList.toggle('visible');
     //  backdrop.classList.toggle('visible'); OR
     toggleBackdrop();
 }

 const clearMovieInputs = () => {
     for (const usrInput of userInputs) {
         usrInput.value = '';
     }
 }

 const cancelAddMovieHandler = () => {
     toggleMovieModal();
     clearMovieInputs();
 }



 const adMovieHandler = () => {
     const titleValue = userInputs[0].value;
     const imageUrlValue = userInputs[1].value;
     const ratingValue = userInputs[2].value;
     if (titleValue.trim() === '' ||
         imageUrlValue.trim() === '' ||
         ratingValue.trim() === '' ||
         +ratingValue < 1 ||
         +ratingValue > 5) {
         alert('Please enter valid value (rating between 1 and 5)');
         return;
     }

     const newMovie = {
         title: titleValue,
         image: imageUrlValue,
         rating: ratingValue
     };

     movies.push(newMovie);
     console.log(movies);
     toggleMovieModal();
     clearMovieInputs();
 }

 const backdropClickHandler = () => {
     toggleMovieModal();
 }

 startAddMovieButton.addEventListener('click', toggleMovieModal);
 backdrop.addEventListener('click', backdropClickHandler);
 cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
 addMovieModal.addEventListener('click', adMovieHandler);