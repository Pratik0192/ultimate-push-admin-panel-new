import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './ViewFeature.scss'
import ViewFeatureBody from '../../components/ViewFeatureBody/ViewFeatureBody'

const ViewFeature = () => {
  return (
    <div className='viewfeature'>
      <Sidebar />
      <div className="viewfeature-container">
        <Navbar />
        <ViewFeatureBody />
      </div>
    </div>
  )
}

export default ViewFeature