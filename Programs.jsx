import React from 'react'
import './Programs.css'
import onlineShopping from '../../assets/onlineShopping.png'
//import program2 from '../../assets/prog.png'
///import program3 from '../../assets/prog.png'
//import icon1 from '../../assets/prog.png'
//import icon2 from '../../assets/prog.png'
//import icon3 from '../../assets/prog.png'

const Programs = () =>{
    return(
        <div className='programs'>
           <div className='program'>
               
                
                    <img src={onlineShopping} />
                    <p>Online shopping</p>
                    <a href="#">Live site</a>
                    <a href="#">Github</a>
                </div>
          

            { /*
            <div className='program'>
                <img src={program2} alt="" />
                <div className='caption'>
                    <img src={icon2} />
                    <p>Graduation degree</p>
                </div>
            </div>

            <div className='program'>
                <img src={program3} alt="" />
                <div className='caption'>
              <img src={icon3} /> 
                    <p>Graduation degree</p>
                </div>
            </div> */}
             
         
        <h2>This is programs</h2></div>
        )}
        
    


export default Programs;