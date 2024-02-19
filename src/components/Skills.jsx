import React from 'react'
import './skill.css'
const Skills = () => {
  return (
    <section id='skills'>
      <div className='naming'>SKILLS</div>
      <div className='gridmake'>
    <div className='techstack'>
      <div className='label'>TECH STACK</div><br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}} ><b>C++</b></div>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}} ><b>Python</b></div>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}} ><b>HTML</b></div>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}} ><b>CSS</b></div>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}} ><b>JavaScript</b></div>
      </div>
      
      
    </div>
    
    <div className='learning'>
    <div className='label'>LEARNINGS</div><br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}} >Data Structures and Algorithms</div>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}} >Machine Learning</div>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}} >Front-end Development</div>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}} >Data Science</div>
      </div>
      <br/>
      
      
      
    </div>
    
    </div>
    </section>
    
  )
}

export default Skills