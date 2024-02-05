import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/fetch.js';
import createsStringOfPageElements from './js/template-page.js';

const galleryRef = document.querySelector('.gallery');
const formRef = document.querySelector('.form');
const loaderRef = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

formRef.addEventListener('submit', loadFirstPageOfGallery);

loaderRef.hidden = true;
formRef.dataset.page = '1';

function loadFirstPageOfGallery(e) {
  e.preventDefault();
  const searchValue = e.currentTarget.elements.query.value.trim();

  if (searchValue === '') {
    showErrorMessage('Enter anything in the search field!');
    return;
  }

  resetGallery();
}

function resetGallery() {
  loaderRef.hidden = false;
  galleryRef.innerHTML = '';
  formRef.dataset.page = '1';
  fetchAndDisplayImages();
}

function showErrorMessage(message) {
  iziToast.error({
    position: 'topRight',
    messageColor: 'brown',
    message,
    timeout: 3000,
  });
}

function fetchAndDisplayImages() {
  const currentPage = parseInt(formRef.dataset.page, 10);

  fetchImages(currentPage, formRef.elements.query.value.trim())
    .then(response => {
      handleImageResponse(response);
    })
    .catch(error => console.error(error))
    .finally(() => {
      loaderRef.hidden = true;
    });
}

function handleImageResponse(response) {
  if (response.hits.length === 0) {
    showErrorMessage(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }

  galleryRef.insertAdjacentHTML(
    'beforeend',
    createsStringOfPageElements(response.hits)
  );
  lightbox.refresh();
}

function resetForm() {
  formRef.reset();
}
