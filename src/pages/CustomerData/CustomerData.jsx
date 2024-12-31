import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './CustomerData.scss'
import CustomerDataBody from '../../components/CustomerDataBody/CustomerDataBody'

const CustomerData = () => {
  return (
    <div className='customerdata'>
      <Sidebar/>
      <div className="customerdata-container">
        <Navbar/>
        <CustomerDataBody />
      </div>
    </div>
  )
}

export default CustomerData