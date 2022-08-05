import MoviePage from "./movie-api";



export default function SearchBar(){

const movieNamesFromApi =[

]
    
const filterMovies =(e) => {
    const search = e.target.value.toLowerCase();
    const filteredMovies = movieNamesFromApi.filter()
}

    return (
        <div id="search-bar"className="flex flex-wrap items-center justify-between align-center">
              <label for="search">
                  <input id="search-bar" 
                  onChange={(e) => filterMovies(e)}
                  className="hover:bg-sky-200" 
                  type="text" 
                  placeholder="Enter Movie Title..." ></input>
              </label>
              </div>
    )
} ;

