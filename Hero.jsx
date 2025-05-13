import React from 'react'
import './Hero.css'
import ComputerScience from '../../assets/ComputerScience.jpeg'
import profileImg from '../../assets/profileImg.jpg'


const Hero =() =>{
    return(
        <div className='hero'> 
        
          


          <div div className="hero-text">
            <h1> Hello, I'm <span> Dimpho Setsile </span></h1>
            <h4>Web developer</h4>
            
            <button className='btn'>Download resume </button>
           </div>
            

            <div className="profile">
              <h4>Dimpho</h4>
             <img src={profileImg} alt=""/>
             <img  alt=""/> 
            </div>
            
               </div>
    )
}
export default Hero;