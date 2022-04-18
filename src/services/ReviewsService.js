import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://localhost/reviews_api/api/index.php',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export default {
  getItems() {
    return HTTP.get();
  },
  postItems(review) {
    let data = review;
    return HTTP.post('', data);
  },
};
