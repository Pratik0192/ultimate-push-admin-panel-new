import React from 'react'
import './Widget.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {

  let data;

  const percentage = 20;

  switch(type){
    case "websites":
      data={
        title: "Websites",
        isMoney: false,
        link: "See all Websites",
        icon: <PersonOutlineOutlinedIcon className='icon' style={{color:'crimson', backgroundColor:'rgba(255, 0, 0, 0.2)'}} />,
        num: '3'
      };
      break;
    case "subscribers":
      data={
        title: "Subscribers",
        isMoney: false,
        link: "view all subscribers",
        icon: <ShoppingCartOutlinedIcon className='icon' style={{color:'goldenrod', backgroundColor:'rgba(255, 0, 0, 0.2)'}} />,
        num: '209'
      };
      break;
    case "campaigns":
    data={
      title: "Campaigns",
      isMoney: true,
      link: "View all campaigns",
      icon: <MonetizationOnOutlinedIcon className='icon' style={{color:'green', backgroundColor:'rgba(255, 0, 0, 0.2)'}} />,
      num: '2'
    };
    break;
    case "notifications":
    data={
      title: "Notifications",
      isMoney: true,
      link: "view notifications",
      icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color:'purple', backgroundColor:'rgba(255, 0, 0, 0.2)'}} />,
      num: '18'
    };
    break;
      default:
        break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.num} </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardDoubleArrowUpIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget