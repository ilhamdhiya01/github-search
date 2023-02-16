import axios from 'axios';

const baseURL: string = 'https://api.github.com/';
export const api = axios.create({
  baseURL,
});
