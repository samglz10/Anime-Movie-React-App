import { useState, useEffect, useContext, createContext } from "react";


const API_ENDPOINT = 'https://ghibliapi.herokuapp.com/films'

const DataContext = createContext();

const MoviePage = () => {               
    const [data, setData] = useState();
    // empty Array must be added to the end of useEffect so it does not loop. [] ensures it only runs once
    useEffect(() => {
        fetch (API_ENDPOINT) //fetch the data
        .then((response) => response.json())  //then after fetchin render the data in JSON
       // .then((result) => data.slice(0,10))  //.slice will return only 10 items because it was specified from (0,10)
        .then ((result)=> setData(result))
        console.log(data)

    }, [])

    return(
        <main id="title-webpage" className=" flex flex-row flex-wrap place-content-evenly mx-5 my-5  ">  
        <DataContext.Provider value= {data}>
            <DisplayMovieResults className="m-0" />
         
        </DataContext.Provider>
    </main>

    )
}


function DisplayMovieResults() {
    
    const fullMovieData = useContext(DataContext) // adding context to 
     return fullMovieData && fullMovieData.map((MovieInfo) => (

        <div id ="main div" className="border-black rounded-xl border-2 backdrop-blur-sm hover:bg-cyan-300 drop-shadow-2xl text-black max-w-sm max-l-sm overflow-hidden shadow-lg px-6 py-4 contrast-150 text-xl font-mono flex-row justify-start  place-content-around content-start  mx-2.5 my-5" key={MovieInfo.id}>
            <h1 className="font-bold text-2xl mb-2 flex items-center justify-center ">{MovieInfo.title} </h1>
                <h3 className=" flex items-center justify-center mx-2.5 my-2.5 "> {MovieInfo.original_title_romanised}  </h3>
                <h3 className=" flex items-center justify-center mx-2.5 my-2.5 "> {MovieInfo.original_title} </h3>
                    <img className=" flex items-center justify-center " src="./assets/default.jpg" ></img>
                     <p className=" min-w-50 min-h-20 flex items-center justify-center flex-wrap text-center scroll-smooth md:scroll-auto mx-5 my-5"> {MovieInfo.description}</p>
                <ul className="px-6 py-6  mx-5 my-5 text-center">
                    <li>
                        Release Date:{MovieInfo.release_date}
                    </li>
                     <li>
                        Runtime: {MovieInfo.running_time} mins.
                    </li>
                            
                 </ul>
         </div>
     ))
}

export default MoviePage;