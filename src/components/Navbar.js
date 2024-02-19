import React from 'react'
import './nav.css';
import {Link} from 'react-scroll'
import im from '../assets/sign.jpg'

const Navbar = () => {
  return (
    <>    
      <nav className = "navbar">
      <div className='name'><img src={im} alt='sorry'/></div>
      <div className='btn'> 
        <Link activeClass = 'active' spy = {true} smooth = {true} offset={-180} duration={500} className = "eachItem" to ={'content'}><button>Home</button></Link>
        <Link activeClass = 'active' spy = {true} smooth = {true} offset={-70} duration={500} className = "eachItem" to ='skills'><button>Skills</button></Link>
        <Link activeClass = 'active' spy = {true} smooth = {true} offset={-60} duration={500} className = "eachItem" to ='projects'><button> Projects </button></Link>
        <Link activeClass = 'active' spy = {true} smooth = {true} offset={-100} duration={500} className = "eachItem" to = 'about' ><button> About </button></Link>
        <Link activeClass = 'active' spy = {true} smooth = {true} offset={-70} duration={500} className = "eachItem" to = 'contact'><button> Contact Me </button></Link>
      </div>
      </nav>
 
    </>   
  )
}

export default Navbar