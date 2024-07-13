import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Recipes from './Components/Recipes/Recipes';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Testymonials from './Components/Testymonials/Testymonials';
import Work from './Components/Work/Work';
export default class App extends Component
{
state={}
render()
{
return<>


<Home/>
<Work/>
<About/>
<Recipes/>
<Testymonials/>
<ContactUs/>
<Footer/>
</>
}
}

