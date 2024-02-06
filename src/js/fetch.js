const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImages(page, searchValue) {
  const params = new URLSearchParams({
    key: KEY_API,
    q: searchValue,
    page: page,
    per_page: 40,
    image_type: 'photo',
    orientation: 'horizontal',
  });

  const url = `${BASE_URL}?${params.toString()}`;

  return fetch(url).then(response => response.json());
}