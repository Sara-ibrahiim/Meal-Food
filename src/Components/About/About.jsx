import React from 'react'
import styles from './About.module.css'
import imgAbout from "../../assets/images/45564e95653121db1a2ec1cdbe0f67c4.jpeg"
export default function About() {
  return<>
        <div className="row ">
         <div className="col-md-8 Brown">
          <div className="col-md-10 offset-2 py-4">
            <p className='text-white AboutUs h1'>ABOUT <br/>US</p>
            <p className='w-50 text-white py-3 letter-AboutUs'>
            Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries,
               but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software
                 like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className='btn btn-warning rounded-pill btn-lg'>CONTACT US</button>
          </div>

         </div>
         <div className="col-md-4">
        
          <img src={imgAbout} alt="" className='w-100 imgAbout rounded-3' />

          
          

         </div>
        </div>

    </>
  
}
