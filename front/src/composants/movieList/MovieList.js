import React ,{useEffect}   from 'react'
import MovieCard from './MovieCard'
import {useDispatch,useSelector} from 'react-redux'
import { fetchMovie } from '../../api/movieApi'
import { setMovie } from '../../store/movieSlice'
const MovieList = () => {

  const Movie = useSelector(state=> state.movie)
const dispatch = useDispatch()
  console.log('listet eflem => ', Movie)


const getMovie=async()=>{
const data = await fetchMovie()
dispatch(setMovie(data.movies))
console.log("data =>",data)
}


//fi tlou" wela lecture du composant el getMovie tkhdem 
useEffect(()=>{
getMovie()
},[])

  return (
    <div>
          <header>
    <form id="form">
      <input type="text" className="search" id="search" placeholder="Search"/>
    </form>
  </header>

  <main id="main">
    {
      Movie.map((el)=>  <MovieCard  el={el}  getMovie={getMovie}   />)
    }
 
  </main>
  
      
    </div>
  )
}

export default MovieList
