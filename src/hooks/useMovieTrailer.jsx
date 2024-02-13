import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useMovieTrailer = (ID) => {

  const dispatch = useDispatch();
  const trailerID = useSelector(store => store.movies.trailerId);

  if(ID === 1){
    ID = trailerID;
  }
  useEffect(() => {
    fetchMovieVideo();
  }, [trailerID]);

  const fetchMovieVideo = async () => {
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzVhZTExNDJlMDZkOGQzZDI0MTg4YThkOWQ0ZDlkOCIsInN1YiI6IjY1OWY1MTI4MzY3OWExMDEyOGFiYjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4BU_PDCkfJi2u84YuPwxIpPcPEpsJ9m-nKmeL-Hh9A'
    }
  };
    const movieVideo = await fetch(
      "https://api.themoviedb.org/3/movie/"+ID+"/videos?language=en-US",
      options
    );

    const json = await movieVideo.json();

    const filterData = json.results?.filter((video) => video.type === "Trailer");
    const trailer = filterData?.length ? filterData?.[0] : json.results?.[0];


    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
