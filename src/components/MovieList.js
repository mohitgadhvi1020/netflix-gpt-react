import { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieCarousel = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="px-6 relative">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex items-center">
        <button
          className="absolute left-0 z-10 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 focus:outline-none"
          onClick={scrollLeft}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="flex overflow-x-scroll scrollbar-hide" ref={scrollRef}>
          <div className="flex space-x-4">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 z-10 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 focus:outline-none"
          onClick={scrollRight}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCarousel;
