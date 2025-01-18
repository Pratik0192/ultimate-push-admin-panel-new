import React from 'react';
import './Widget.scss';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Widget = ({ type, quantity }) => {
  const navigate = useNavigate(); // Hook for navigation
  let data;

  const handleNavigation = () => {
    if (type === 'websites') navigate('/websites'); // Navigate to /websites for "websites" type
    // Add more conditions here for other types if needed
  };

  const percentage = 20;

  switch (type) {
    case 'websites':
      data = {
        title: 'Websites',
        isMoney: false,
        link: 'See all Websites',
        icon: <LanguageOutlinedIcon className="icon" style={{ color: 'blue', backgroundColor: 'rgba(0, 0, 255, 0.2)' }} />,
        num: quantity,
      };
      break;
    case 'subscribers':
      data = {
        title: 'Subscribers',
        isMoney: false,
        link: 'View all Subscribers',
        icon: <GroupOutlinedIcon className="icon" style={{ color: 'goldenrod', backgroundColor: 'rgba(255, 223, 0, 0.2)' }} />,
        num: quantity,
      };
      break;
    case 'campaigns':
      data = {
        title: 'Campaigns',
        isMoney: true,
        link: 'View all Campaigns',
        icon: <CampaignOutlinedIcon className="icon" style={{ color: 'green', backgroundColor: 'rgba(0, 255, 0, 0.2)' }} />,
        num: quantity,
      };
      break;
    case 'notifications':
      data = {
        title: 'Notifications',
        isMoney: false,
        link: 'View Notifications',
        icon: <NotificationsOutlinedIcon className="icon" style={{ color: 'purple', backgroundColor: 'rgba(128, 0, 128, 0.2)' }} />,
        num: quantity,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.num}</span>
        <span className="link" onClick={handleNavigation} style={{ cursor: 'pointer', color: 'blue' }}>
          {data.link}
        </span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
