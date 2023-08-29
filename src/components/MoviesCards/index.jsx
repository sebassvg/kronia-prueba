import React from 'react'

export const MoviesCards = ({
    imageUrl,
    title,
    director,
    opening_crawl,
    id,
  }) => {
  return (
    <div className="max-w-sm text-white bg-gray-800 border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img className="rounded-t-lg" src={imageUrl} alt={`Image of ${title}`} />
    </a>
    <div className="container flex-col justify-between p-5 align-middle mx-autoflex">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        </a>
       
        <p className="mb-3 font-normal">Director: {director}</p>
        <p className="mb-3 font-normal leading-relaxed">Openin Crawl: {opening_crawl}</p>
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
