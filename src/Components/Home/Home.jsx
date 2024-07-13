import React from 'react'
import styles from './Home.module.css'
import bake from "../../assets/images/bake.png"
import imgSm from "../../assets/images/MaskGroup22.png"
export default function Home() {
  return<>

  <div className="">
  <div className="row Home ">
 

  <div className='col-md-8  Brown Home-left-side'>
    <div className="container offset-md-2 ps-5">

      
    <p className='text-white ps-5 text-logo mt-2 mb-4 PEACHY'>PEACHY PUP <br/>BAKERY</p>
    <div className='d-flex justify-content-center align-items-cente'>
      <div>
   
      <h1 className='text-white'>TASTY PASTRIES</h1>
    <p className='w-50 text-white py-4 letter-Home'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the</p>
     
    <button className='btn btn-warning rounded-pill btn-lg mb-5'>SEE MORE</button>

      </div> 
  
   
    </div>
   
  </div>

<div className="col-sm-9 d-flex ">
  <div className="col-md-6 bg-white img-sm position-relative">
    <img src={imgSm} alt="" className='w-100' />
    <div className=' icons-home'>
      <div className='d-flex flex-column text-end me-3 pb-2 '>
      <i className="fa-brands fa-vk kaki "></i>
      <i className="fa-brands fa-facebook  kaki my-3"></i>
      <i className="fa-brands fa-square-instagram mb-3 kaki"></i>
      <i className="fa-brands fa-twitter  kaki"></i>
      </div>
      
      

    </div>

   

  </div>
  <div className="col-sm-7 d-flex align-items-end number-colum ms-2 text-right-side ">
    <p className='text-white me-2 Number'>Telephone:</p>
    <p className='text-white Number'> +7 700 000 00 00</p>
    
    </div>
  


</div>
  
  </div>

  <div className="col-md-4 home-bg d-flex align-items-center">
   <div className='Home-img-Right-side  '>
    <img src={bake} alt=""  className='w-100 '/>

    </div> 


  </div>


  </div>
  </div>



    
  </>
  
}
