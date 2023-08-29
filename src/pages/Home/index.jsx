import React, { useState } from 'react'
import useStarWarsApi from '../../hooks/useStarWarsApi'
import { CharacterCards } from '../../components/CharacterCards';
import { getUrlId } from '../../utils/getUrlId';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useStarWarsApi(`people?page=${currentPage}`);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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

  const totalPages = Math.ceil(data.count / data.results.length);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="p-10 bg-neutral-100">
      <h1 className='mb-10 text-2xl font-bold text-center'>Star Wars Characters</h1>
      {data && (
        <div className="flex flex-wrap justify-center gap-10 align-center">
          {data.results.map((character, index) => (
            <CharacterCards
            key={getUrlId(character.url)}
            imageUrl={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
              character.url,
            )}.jpg`}
            name={character.name}
            gender={character.gender}
            height={character.height}
            id={getUrlId(character.url)}
          />
          ))}
        </div>)}

     <div className="flex flex-col items-center justify-between mt-4 md:flex-row">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 md:mb-0 md:mr-2"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <div className={`flex md:flex-row justify-between items-center mt-4 ${pageNumbers.length > 1 ? 'hidden md:flex' : ''}`}>
              {pageNumbers.map(number => (
                <button
                key={`page-${number}`}
                  className={`mx-1 ${
                    number === currentPage
                      ? 'bg-blue-700 text-white'
                      : 'bg-blue-500 hover:bg-blue-700 text-white hover:text-white'
                  } font-bold py-2 px-3 rounded`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              ))}
            </div>
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
  </div>
  )
}
