import React, { useState } from 'react'
import useStarWarsApi from '../../hooks/useStarWarsApi'
import { getUrlId } from '../../utils/getUrlId';
import { MoviesCards } from '../../components/MoviesCards';

export const Movies = () => {
    const { data, isLoading, error } = useStarWarsApi(`films`);
  
    if (isLoading) {
      return (
        <div class="flex items-center justify-center w-full min-h-screen">
          <div class="flex flex-col justify-center items-center space-x-1 text-sm text-gray-700">
            <img class="w-40 h-32" src={"/images/deathstar.gif"} alt="Loading gif" />
            <p>Loading...</p>
          </div>
        </div>
      );
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
  
  
    return (
      <div className="p-10 bg-neutral-100">
        <h1 className='mb-10 text-2xl font-bold text-center'>Star Wars Movies</h1>
        {data && (
          <div className="flex flex-wrap justify-center gap-10 align-center">
            {data.results.map(movie => (
              <MoviesCards
              imageUrl={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                movie.url,
              )}.jpg`}
              title={movie.title}
              key={getUrlId(movie.url)}
              director={movie.director}
              opening_crawl={movie.opening_crawl}
              id={getUrlId(movie.url)}
            />
            ))}
          </div>
        )}
      </div>
    )
}
