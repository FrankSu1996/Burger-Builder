import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-1200b.firebaseio.com/',
});

export default instance;
