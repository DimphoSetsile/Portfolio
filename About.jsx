import React from 'react'
import  './About.css'
//import about_img from '../../assets/about.png'
//mport play_icon from '../../assets/play-icon.png'


const About = ()=>{
    return(
    <div className='about'>
      <div className='about-left'>
        <h2>Technical skills</h2>
        <ul>
          
          <p><span className="big">C#,</span> <span className="" >Asp.net </span> html<br/><span className=""> css</span> 
          <span className=""> javascript</span>,<span className="big"> sql</span></p>
          
        </ul>
        
        
        

      </div>
      <div className='about-right'>
        <h3>ABOUT Me</h3>
        <h2>Junior web developer</h2>
        <p> I am Dimpho, a junior web developer.
          I graduated from North West university
          with a bachelor of commerce in Information 
          Systems degree.
        </p>
        
      </div>
      
       
    </div>
    )
}
export default About;