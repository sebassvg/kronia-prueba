import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

export const Header = () => {
  return (
    <nav 
      className="relative flex flex-col items-center justify-between w-full py-2 text-white bg-gray-800 shadow-lg md:flex-row md:flex-wrap md:content-between md:px-5"
    >
      <Link className="" to="/">
        <img src='/images/logo.svg' alt="Logo Star Wars" />
      </Link>

      <div className="menu-container">
        <Link className='text-xl text-bold' to="/">
          Characters
        </Link>

        <Link className='text-xl text-bold' to="/movies">
          Movies
        </Link>
        <Link className='text-xl text-bold' to="/sign-up">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}