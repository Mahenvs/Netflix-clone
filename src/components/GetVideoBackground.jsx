import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect } from "react";

const GetVideoBackground = ({ movieId, isPlaying }) => {
  // useEffect(localStorage.setItem("mainMovie", mainMovie);)
  useMovieTrailer(movieId ? movieId : 324622);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useEffect(() => {
    console.log("10000");
  }, []);
  // Hardcoding trailer src = "4GPvYMKtrtI"
  // src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1&loop=1"}
  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/d3K5FvWE6BQ?autoplay=1&loop=1&playlist=d3K5FvWE6BQ&modestbranding=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&mute=1"
        title="YouTube video player"
        frameBorder="0"
        id="video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GetVideoBackground;
