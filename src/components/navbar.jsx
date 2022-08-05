import React from "react";
import SearchBar from "./searchbar";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 text-black  flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-green-400 to-cyan-400">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative justify-between lg:w-auto lg:static lg:block ">
            <a
              className="text-xl font-bold flex items-center justify-center text-black  "
              href="/"
            >
              Studio Ghibli Movies
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          
          </div>
        <SearchBar/>
          <div
            className={
              "lg:flex items-center flex-end" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com"
                >
                  <i className="fab fa-facebook-square text-xl leading-lg text-black opacity-75"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com"
                >
                  <i className="fab fa-twitter text-xl leading-lg text-black opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
