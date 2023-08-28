import React from 'react'

export const CharacterCards = ({
    type,
    imageUrl,
    name,
    gender,
    height,
    id,
  }) => {
  return (
    <div className="max-w-sm text-white bg-gray-800 border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img className="rounded-t-lg" src={imageUrl} alt={`Image of ${name}`} />
    </a>
    <div className="flex flex-col justify-between h-48 p-5 align-middle">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
        </a>
       
        {gender !== "n/a" && (
            <p className="mb-3 font-normal">Gender: {gender}</p>
        )}
        <p className="mb-3 font-normal">Height: {height}cm</p>
        <a href="#" className="inline-flex items-center self-start px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  )
}
