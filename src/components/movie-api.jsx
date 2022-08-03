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
        <main>  
        <h1 className=" text-white contrast-150 text-xl font-mono font-white"> Watch Some Studio Ghibli Anime 🥣  </h1>
        <DataContext.Provider value= {data}>
            <DisplayMovieResults />
        </DataContext.Provider>
    </main>

    )
}


function DisplayMovieResults() {
    
    const fullMovieData = useContext(DataContext) // adding context to 
     return fullMovieData && fullMovieData.map((MovieInfo) => (

            <div className=" text-white max-w-sm rounded overflow-hidden shadow-lg ">
                <div className=" m-o px-6 py-4 border-gray-800 rounded-lg contrast-150 text-xl font-mono   " key={MovieInfo.id}>
                    <div className=" flex justify-content align-item flex-col text-center flex-wrap ">
                        <h2 className="font-bold text-xl mb-2">{MovieInfo.title} </h2>
                        <h3> {MovieInfo.original_title_romanised} {MovieInfo.original_title}  </h3>
                            <img className="object-cover" src="./assets/default.jpg" ></img>
                        <p className="truncate text-white text-base"> {MovieInfo.description}</p>
                            <ul className="px-6 pt-4 pb-2">
                                <li>
                                    Release Date:{MovieInfo.release_date}
                                </li>
                                <li>
                                    Runtime: {MovieInfo.running_time} mins.
                                </li>
                            
                            </ul>
                        </div>
                </div>
            </div>
     ))
}

export default MoviePage;