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
        <img className="rounded-t-lg" src={imageUrl} alt={`${title}`} />
    <div className="container flex-col justify-start p-5 align-middle mx-autoflex">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p className="mb-3 font-normal">Director: {director}</p>
        <p className="mb-3 font-normal leading-relaxed">Opening Crawl: {opening_crawl}</p>
    </div>
</div>
  )
}
