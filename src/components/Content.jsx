import React from 'react'
import './content.css'
import im from './Screenshot 2024-01-08 235136.png'

const Content = () => {
  return (
    <section id='content'>
      
      <div className='grid-maker'>
        <div className='leftsection'> 
          Hello, I am 
          <p className='n'> Shreyanshu </p> 
          <p className = 'y'> Software Developer </p>
            <div className='icons'>
              <a href='https://www.instagram.com/shreyanshu28_raj/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1' target="_blank"><i className="ci ci-instagram ci-2x icon"></i></a>
              <a href='https://www.linkedin.com/in/raj28shreyanshu' target="_blank"><i className="ci ci-linkedin ci-2x icon"></i></a>
              <a href='https://github.com/RajShreyanshu28?tab=repositories' target="_blank"><i className="ci ci-github ci-invert ci-2x icon"></i></a>
              <a href='https://leetcode.com/shreyanshu7/' target="_blank"><i className="ci ci-leetcode ci-2x ci-invert icon"></i></a>

              
              
              
              
            </div>
        </div>
        <div className = 'rightsection'> <img src={im} alt = 'sorry'/> </div>
      </div>  
    </section>
  )
}

export default Content