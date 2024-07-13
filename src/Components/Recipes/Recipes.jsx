import React, { useEffect, useState } from 'react'
import styles from './Recipes.module.css'
import axios from 'axios';

export default function Recipes() {
  const [meals, setMeals] = useState([])
async function getMeals() {
  let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`)
  setMeals(data.meals)
  // console.log(data.meals)
}
useEffect(()=>{
  getMeals();
},[])


  return<>
  <div className="container my-4 Recipes ">
  <h1 className='text-center my-4'>RECIPES</h1>
  <div className="row justify-content-center ">
  
  {meals.slice(0,3).map((meal,index)=>   <div key={index} className="col-md-4">
    <div className='border rounded-5'>
    <img src={meal.strMealThumb} alt=""  className='w-100 rounded-5'/>
    <div className=' px-3 me-1'>
    <h6 className='text-recipes my-3'>{meal.strMeal}</h6>
    <p className=''>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled
    </p>
    </div>


    </div>
  


  </div> )}


   </div>

  
  </div>
  <div className='d-flex justify-content-center'>
  <button className='btn btn-warning rounded-pill btn-lg my-4 text-center'>CONTACT US</button>
  </div>

  <div>

</div>
    </>
  
}
