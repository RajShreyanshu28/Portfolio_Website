import React from 'react'
import './projects.css'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
const projects = () => {
  return (
    <section id='projects'>
      <div className='naming'> PROJECTS</div>
      <div className='desc'>
      "In my project portfolio, I've tackled challenges and delivered results across various domains. Whether it's innovating solutions, leading teams, or optimizing processes, each project reflects my adaptability, problem-solving skills, and commitment to achieving excellence in diverse professional settings."
      </div>
      <div className='allproj'>
        <div className='eachProj'> <img src={p1} alt="Sorry"/> </div>
        <div className='eachProj'> <img src={p2} alt="Sorry"/> </div>
      </div>
    </section>

  )
}

export default projects