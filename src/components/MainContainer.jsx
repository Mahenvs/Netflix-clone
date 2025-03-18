import React, { useEffect, useState } from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import GetVideoBackground from "./GetVideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [isPlaying, setPlaying] = useState(true);
  const selectedMovie = useSelector((store) => store.movies?.selectedMovie);

  useEffect(() => {}, [selectedMovie]);
  const handlePlay = () => {
    setPlaying(!isPlaying);
  };
  let mainMovie;
  if (!movies) {
    return;
  } else {
    mainMovie = movies[0];
  }
  // localStorage.setItem("mainMovie", JSON.stringify(mainMovie));

  if (selectedMovie != null) {
    mainMovie = selectedMovie;
  }
  const { original_title, overview, poster_path, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle
        onPlayHandle={handlePlay}
        title={original_title}
        overview={overview}
        poster_path={poster_path}
        isPlaying={isPlaying}
      />
      {/* <VideoTitle
        title={trailer?.name}
        overview={trailer?.overview}
        poster_path={poster_path}
      /> */}
      {/* <VideoTitle title={trailer?.name} /> */}
      <GetVideoBackground movieId={id} isPlaying={isPlaying} />
    </div>
  );
};

export default MainContainer;
