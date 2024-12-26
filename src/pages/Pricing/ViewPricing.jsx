import React from 'react'
import './ViewPricing.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ViewPricingBody from '../../components/ViewPricingBody/ViewPricingBody'

const ViewPricing = () => {
  return (
    <div className='viewPricing' >
      <Sidebar />
      <div className="viewPricing-container">
        <Navbar />
        <ViewPricingBody />
      </div>
    </div>
  )
}

export default ViewPricing