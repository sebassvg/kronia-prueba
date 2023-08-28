import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

export const Header = () => {
  return (
    <nav 
      class="relative flex flex-col w-full items-center justify-between bg-gray-800 py-2 
      text-white shadow-lg
      md:flex-row md:flex-wrap md:content-between md:px-5"
    >
      <Link class="" to="/">
        <img src='/images/logo.svg' alt="Logo Star Wars" />
      </Link>

      <div class="menu-container">
        <Link to="/">
          Characters
        </Link>

        <Link to="/films">
          Movies
        </Link>
        <Link to="/starships">
          Login
        </Link>
      </div>
    </nav>
  );
}