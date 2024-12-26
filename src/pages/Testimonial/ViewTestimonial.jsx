import React from 'react'
import './ViewTestimonial.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ViewTestiBody from '../../components/ViewTestiBody/ViewTestiBody'

const ViewTestimonial = () => {
  return (
    <div className='viewtesti' >
      <Sidebar />
      <div className="viewtesti-container">
        <Navbar />
        <ViewTestiBody />
      </div>
    </div>
  )
}

export default ViewTestimonial