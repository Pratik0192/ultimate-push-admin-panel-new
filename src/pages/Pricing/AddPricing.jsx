import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import AddPriceBody from '../../components/addpricingbody/AddPriceBody'
import './AddPricing.scss'

const AddPricing = () => {
  return (
    <div className='addPricing'>
      <Sidebar />
      <div className="addpricing-container">
        <Navbar />
        <AddPriceBody />
      </div>
    </div>
  )
}

export default AddPricing