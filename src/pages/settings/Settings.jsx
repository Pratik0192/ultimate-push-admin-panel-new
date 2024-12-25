import React from 'react'
import './Settings.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import SettingsBody from '../../components/settingsbody/SettingsBody'

const Settings = () => {
  return (
    <div className='settings'>
      <Sidebar />
      <div className="settings-container">
        <Navbar />
        <SettingsBody />
      </div>
    </div>
  )
}

export default Settings