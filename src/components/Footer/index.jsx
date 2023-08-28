import React from 'react'

export const Footer = () => {
  return (
    <footer
  className="flex flex-col items-center text-center bg-neutral-200 lg:text-left">
  <div className="container p-6">
    <div className="grid grid-cols-1 text-center place-items-center">
    <p> Created by:{' '} <a className="font-bold" href="https://www.linkedin.com/in/sebastian-vizcarra-gradilla-1565141a8/">Sebastian Vizcarra</a></p>

    <p> Data got it from: {' '} <a className="font-bold" href="https://swapi.dev/">SWAPI</a> </p>
    </div>
  </div>

  <div
    className="w-full p-4 text-center bg-neutral-300 text-neutral-700">
    © 2023 Copyright: {' '}
    <a
      className="text-neutral-800"
      href="https://tailwind-elements.com/"
      >
        Sebastian Vizcarra
    </a>
  </div>
</footer>
  )
}
