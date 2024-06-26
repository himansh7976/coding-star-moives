import React, { useEffect, useState } from 'react'
import './movielist.css'
import { useParams } from 'react-router-dom'
import Cards from '../Cards/Cards';

function Movielist() {
  const  {type} = useParams()
  const [movielist,setmovielist]=useState([]);

  useEffect(() => {
    getData()
}, [])

useEffect(() => {
    getData()
}, [type])

const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
    .then(data => setmovielist(data.results))
}


  
  return (
    <div className='movie__list'>
    <h2 className='list__title'> {type ? type : "popular".toUpperCase()} </h2>
    <div className='list__cards'>
        {
            movielist.map((i)=>(  
                <Cards item={i}/>
            ))
        }
    </div>

      
    </div>
  )
}

export default Movielist