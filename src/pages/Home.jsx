import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import { Link } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import Movielist from '../components/Movielist/Movielist';
function Home() {
    const [data,setdata]= useState([])

    useEffect(()=>{
    const apicall=async ()=>{
        const res= await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")

        const jso=await res.json();
        setdata(jso.results)
    }
    apicall();
    console.log(data)

    },[])
  return (
   <>
   <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={5}
                    infiniteLoop={true}
                    showStatus={false}
                >
                {

                    data.map((item,idx)=>( 
                        <Link style={{textDecoration:"none",color:"white"} } to={`/movie/${item.id}`}>

                       
                       <div key={item.id}>

                        <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title"> {item.original_title} </div>
                                    <div className="posterImage__runtime">
                                      {item.release_date}
                                        <span className="posterImage__rating">
                                            {item.vote_average}
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                    <div className="posterImage__description">   </div>
                                </div>
                       </div>
                
                                </Link>
                    ))
                }

                           
                            
                    
                </Carousel>
               <Movielist/>

            </div>
                

 

   </>
  )
}

export default Home