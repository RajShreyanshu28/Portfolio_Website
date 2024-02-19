import React from 'react'
import './about.css'
const about = () => {
  return (
    <>
      <section id = 'about'>
        <div className='head'>ABOUT ME</div>
        <div className='main'>
          <div className='title'>
            Name :<br></br>
            Field of Study :<br></br>
            Institute : <br/>
            Email : <br/>
            Nationality : <br/>

            </div>
          <div className='details'>
            Shreyanshu Raj <br/>
            Computer Science and Engineering <br/>
            The LNM Institute of Information Technology <br></br>
            raj.shreyanshu28@gmail.com <br/>
            Indian <br/>
          </div>

        </div>
      </section>
    </>
  )
}

export default about