import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useDispatch } from 'react-redux';
import { setSelectedMovie, setTrailerId } from '../utils/moviesSlice';

const MovieCard = ({poster,name,id}) => {
  
  useMovieTrailer(1);

  const dispatch = useDispatch();
  
  const handler = (movieData) =>{
    console.log(movieData);
    dispatch(setTrailerId(movieData.id));
    dispatch(setSelectedMovie({
     poster_path:movieData.poster_path, id:movieData.id,
      original_title: movieData.original_title,
    overview:movieData.overview}))
  }
  return (
    <div className='w-[150px] md:w-48 pr-4 ' onClick={() => handler(id)}>
      <img className='h-[150px]  w-[120px] md:w-fit md:h-fit object-cover ' alt="" src={poster} />
      <span className=' text-md md:text-lg md:h-fit md:leading-4 text-slate-400'>
      {name}</span>
    </div>
  )
}

export default MovieCard