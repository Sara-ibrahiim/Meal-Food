import React, { useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import toast from 'react-hot-toast';
import styles from './ContactUs.module.css'
export default function ContactUs() {

  const [errorMessage, seterrorMessage] = useState('')


  let validationSchema = Yup.object({
    name:Yup.string().required('Name is required').min(3,'minimum name 3 char').max(15,'maxmuim 15 char'),
    email:Yup.string().required('email is required').email('Email InVaild'),
    phone:Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/,' phone InVaild'),




  })
  let formik = useFormik({

    initialValues:{
    
     email:"",
     phone:"", 
     name:"",
    },
    validationSchema,
    onSubmit:handelContactUs
  });

  async function handelContactUs(values) {
 
    let {data} = await axios.post(`http://upskilling-egypt.com:3001/contact`,values)
     seterrorMessage(data.message)
     console.log(data.message)
  

    
    // if(data.message === 'success'){
    //  toast('Message Send Success')
 
    // }else{
    //   toast('Message did not Send')
    // }
  
   }
  return<>
  <div className="container contactUs">
  <h1 className='text-center my-5'>CONTACT US</h1>
  <div className="row mb-5">
    <div className="col-md-4 offset-md-2">
    {errorMessage.length > 0? <div className='alert alert-danger'>
        {errorMessage}
      </div>:null}

      <form onSubmit={formik.handleSubmit}>
     
    
      <input  placeholder='Full Name' onBlur={formik.handleBlur} className='rounded-pill form-control mb-2' onChange={formik.handleChange} value={formik.values.name} type="text" name='name' id="name"/>
      {formik.errors.name && formik.touched.name? <div className='alert alert-danger'>{formik.errors.name}</div>:null}
     
     
      <input   placeholder='Email' onBlur={formik.handleBlur} className='rounded-pill my-3 form-control ' onChange={formik.handleChange} value={formik.values.email} type="email" name='email' id="email"/>
      {formik.errors.email && formik.touched.email? <div className='alert alert-danger'>{formik.errors.email}</div>:null}
   
      <input  placeholder='Phone' onBlur={formik.handleBlur} className=' rounded-pill form-control mb-2' onChange={formik.handleChange} value={formik.values.phone} type="tel" name='phone' id="phone"/>
      {formik.errors.phone && formik.touched.phone? <div className='alert alert-danger'>{formik.errors.phone}</div>:null}
     <div className='d-flex justify-content-center mt-3'> 
      <button type='submit' className='btn btn-light rounded-pill btn-lg mb-2'>SEND</button>
         </div>
    
      </form>

    </div>

    <div className="col-md-3 d-flex align-items-center justify-content-around ms-4 ">
      <div >
        <p >
        <i className="fa-solid fa-envelope kaki pe-2"></i>
        <span className='pb-2 fw-light'>  upskilling.eg1.gmail.com</span>

        </p>
      
      <p >
        <i className="fa-solid fa-phone kaki pe-2">

          </i>
          <span className='fw-light'> +20 115 493 2137 </span></p>


      </div>
    
    </div>

  </div>
  </div>
    
    </>
  
}
