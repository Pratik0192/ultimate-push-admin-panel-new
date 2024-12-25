import React from 'react'
import './Notification.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import NotificationBody from '../../components/notificationbody/NotificationBody'

const Notification = () => {
  return (
    <div className='notification'>
      <Sidebar />
      <div className="notification-container">
        <Navbar />
        <NotificationBody />
      </div>
    </div>
  )
}

export default Notification