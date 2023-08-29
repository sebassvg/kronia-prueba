import React from 'react'

export const CharacterCards = ({
    imageUrl,
    name,
    gender,
    height,
    id,
  }) => {
  return (
    <div key={id} className="max-w-sm text-white bg-gray-800 border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg" src={imageUrl} alt={`${name}`} />
      <div className="flex flex-col justify-start p-5 align-middle">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>

          {gender !== "n/a" && (
              <p className="mb-3 font-normal">Gender: {gender}</p>
          )}
          <p className="mb-3 font-normal">Height: {height}cm</p>
          
      </div>
    </div>
  )
}
