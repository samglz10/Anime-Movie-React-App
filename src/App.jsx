import { useState, useEffect, useContext, createContext } from "react";
import logo from './logo.svg'
import './App.css'
import MoviePage from "./components/movie-api";
import Navbar from "./components/navbar";

function App() {

const [count, setCount] = useState(0)


  return (
    <main className="bg-[url('./assets/mount-fuji-background.jpg')] bg-center bg-scroll bg-cover  ">
      <div className=" ">
        <Navbar/>
        <MoviePage className="contrast-150 text-xl font-mono "/>
      </div>
    </main>
  )
}

export default App
 //grid grid-cols-4 gap-4