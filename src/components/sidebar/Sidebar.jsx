import React from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ViewListIcon from '@mui/icons-material/ViewList';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Ultimate Push</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* Dashboard */}
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          {/* Websites */}
          <Link to="/websites" style={{ textDecoration: 'none' }}>
            <li>
              <LanguageIcon className="icon" />
              <span>All Websites</span>
            </li>
          </Link>

          {/* Notifications */}
          <Link to="/notification" style={{ textDecoration: 'none' }}>
            <li>
              <NotificationsIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>

          {/* Pricing */}
          <Link to="/viewpricing" style={{ textDecoration: 'none' }}>
            <li>
              <MonetizationOnIcon className="icon" />
              <span>Pricing</span>
            </li>
          </Link>

          {/* Features */}
          <Link to="/viewfeatures" style={{ textDecoration: 'none' }}>
            <li>
              <ViewListIcon className="icon" />
              <span>Features</span>
            </li>
          </Link>

          {/* Testimonial */}
          <Link to="/viewtesti" style={{ textDecoration: 'none' }}>
            <li>
              <ThumbUpAltIcon className="icon" />
              <span>Testimonial</span>
            </li>
          </Link>

          {/* Settings */}
          <Link to="/settings" style={{ textDecoration: 'none' }}>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>

          {/* Profile */}
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>

          {/* Log Out */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <LogoutIcon className="icon" />
              <span>Log Out</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
