import React from 'react'

export const Footer = () => {
  return (
    <footer
  class="flex flex-col items-center bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
  <div class="container p-6">
    <div class="grid place-items-center grid-cols-1 text-center">
    <p> Created by:{' '} <a class="font-bold" href="https://www.linkedin.com/in/sebastian-vizcarra-gradilla-1565141a8/">Sebastian Vizcarra</a></p>

    <p> Data got it from: {' '} <a class="font-bold" href="https://swapi.dev/">SWAPI</a> </p>
    </div>
  </div>

  <div
    class="w-full bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    © 2023 Copyright: {' '}
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >
        Sebastian Vizcarra
    </a>
  </div>
</footer>
  )
}
