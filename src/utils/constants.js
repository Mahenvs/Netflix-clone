import background from '../assets/Background.jpg'
export const NETFLIX_BODY_URL = background;
export const POSTER_URL = "https://image.tmdb.org/t/p/w500/";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzVhZTExNDJlMDZkOGQzZDI0MTg4YThkOWQ0ZDlkOCIsInN1YiI6IjY1OWY1MTI4MzY3OWExMDEyOGFiYjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BU_PDCkfJi2u84YuPwxIpPcPEpsJ9m-nKmeL-Hh9A'
  }
};

export const SUPPORTED_LANG = [
  { identifier:"en",
    name:"english"
  },
  { identifier:"telugu",
    name:"telugu"
  },
  { identifier:"hindi",
    name:"hindi"
  },
];