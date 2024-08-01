import React from 'react'
import { removeovie } from '../../api/movieApi'
import {useNavigate} from "react-router-dom"
const MovieCard = ({el,getMovie}) => {


const removeM=async()=>{
 await removeovie(el._id)
 getMovie()
}

const navigate = useNavigate()

  return (
    <div>
       <img src={el.image} alt="title}" />
            <div className="movie-info">
            <h3> {el.titre}</h3>
            <span className="${getClassByRate(vote_average)}">{el.rate}</span> <br/> <br/><br/><br/>
            <h3>Trailer</h3>
<button  onClick={()=>removeM()}   >remove</button>     
<button   onClick={()=>navigate(`/updateMovie/${el._id}`)}    >update</button>       
            </div>

            
    </div>
  )
}

export default MovieCard
