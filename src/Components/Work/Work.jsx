import React from 'react'

import styles from './Work.module.css'
import imgone from "../../assets/images/imgone.jpeg"
import imgtwo from "../../assets/images/imgtwo.png"
import imgthree from "../../assets/images/imgthree.png"
import imgfour from "../../assets/images/imgfour.png"
export default function Work() {
  return<>
     <div className="row ">
      <div className="col-md-4 work-bg pb-3">
        <div className=' py-5 d-flex justify-content-end me-3'>
        <p className='kaki  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the</p>


        </div>

       {/* <div className='col-md-7 ms-4 '>
       <img src={imgone} alt=""  className='w-75'/>

       </div> */}

        
       

      </div>

      <div className="col-md-8 Brown ">
        <div className="col-md-8 text-end">
        <h1 className='text-white  mt-5 how-We me-4 '>HOW WE</h1>
        <h1  className=' text-white me-4 ' >WORK</h1>

        </div>
       
        <div className=" work-colums">
        <div className="row my-5 ">
        <div className="col-md-3 mb-2">
        <img src={imgone} alt=""  className='w-100 rounded-2'/>
    

          </div>
  
        
          <div className="col-md-3 mb-2">
            <img src={imgtwo} alt=""  className='w-100 rounded-'/>

          </div>
          <div className="col-md-3 mb-2">
            <img src={imgthree} alt=""  className='w-100'/>

          </div>
          <div className="col-md-3">
            <img src={imgfour} alt=""  className='w-100'/>

          </div>
        </div>

        </div>
        <div className='col-md-4 d-flex justify-content-end work-btn'>
        <button className='mb-5 btn btn-warning rounded-pill btn-lg'>CONTACT US</button>
        </div>

       

      </div>
     </div>
    </>
  
}
