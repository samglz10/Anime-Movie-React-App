import { useState, useEffect, useContext, createContext } from "react";
import logo from './logo.svg'
import './App.css'
import MoviePage from "./components/movie-api";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";


function App() {

  return (
    <div className="bg-gradient-to-r from-teal-200 to-cyan-200">
      <div>
        <img className="w-30 h-36 flex items-center justify-center m-auto "src="../assets/studio.png"></img>
        <Navbar className="sticky top-0 "/>
        <MoviePage className="text-black contrast-150 text-xl font-mono "/>
      </div>
    </div>
  )
}

export default App
 //grid grid-cols-4 gap-4