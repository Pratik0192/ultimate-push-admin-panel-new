import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className="logo">Ultimate push</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to='/' style={{textDecoration:'none'}}>
            <li>
              <DashboardIcon className='icon'/>
              <span>Dashboard</span>
            </li>
          </Link>
          

          <Link to='/websites' style={{textDecoration:'none'}}>
            <li>
              <PersonIcon className='icon' />
              <span>All Websites</span>
            </li>
          </Link>
          <Link to='/notification' style={{textDecoration:'none'}} >
            <li>
              <NotificationsIcon className='icon' />
              <span>Notifications</span>
            </li>
          </Link>
          <Link to='/pricing' style={{textDecoration:'none'}} >
            <li>
              <NotificationsIcon className='icon' />
              <span>Pricing</span>
            </li>
          </Link>
          <Link to='/features' style={{textDecoration:'none'}} >
            <li>
              <NotificationsIcon className='icon' />
              <span>Features</span>
            </li>
          </Link>
          <Link to='/testi' style={{textDecoration:'none'}} >
            <li>
              <NotificationsIcon className='icon' />
              <span>Testimonial</span>
            </li>
          </Link>
          
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>System Health</span>
          </li>
          <Link to='/settings' style={{textDecoration: 'none'}}>
            <li>
              <SettingsIcon className='icon' />
              <span>Settings</span>
            </li>
          </Link>
          <Link to='/profile' style={{textDecoration:'none'}}>
            <li>
              <AccountCircleIcon className='icon' />
              <span>Profile</span>
            </li>
          </Link>
          
          <li>
            <LogoutIcon className='icon' />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption">

        </div>
        <div className="colorOption">
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar