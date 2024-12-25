import React from 'react'
import './Testimonial.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Addtestibody from '../../components/Addtestibody/Addtestibody'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <Sidebar/>
      <div className="testimonial-body">
        <Navbar />
        <Addtestibody />
      </div>
    </div>
  )
}

export default Testimonial