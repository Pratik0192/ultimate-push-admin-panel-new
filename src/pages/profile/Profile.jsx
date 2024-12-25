import React from 'react'
import './Profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ProfileBody from '../../components/profilebody/ProfileBody'

const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar />
      <div className="profile-container">
        <Navbar />
        <ProfileBody />
      </div>
    </div>
  )
}

export default Profile