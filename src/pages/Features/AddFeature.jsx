import React from 'react'
import './AddFeature.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import AddFeatureBody from '../../components/AddFeatureBody/AddFeatureBody'

const AddFeature = () => {
  return (
    <div className='feature'>
      <Sidebar />
      <div className="feature-container">
        <Navbar />
        <AddFeatureBody />
      </div>
    </div>
  )
}

export default AddFeature