import axios from 'axios';
function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
}

export const movies = create('https://api.themoviedb.org/3/movie/now_playing?api_key=d2bb40d5b45665c9a72ed5938162a943&language=ko-KR');