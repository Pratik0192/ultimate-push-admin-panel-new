import React from 'react'
import './Featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'> Total Revenue</h1>
        <MoreVertOutlinedIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text='70%' strokeWidth={5} />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">Rs.9564</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowDownOutlinedIcon negative />
              <div className="resultAmount">Rs.12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last week</div>
            <div className="itemResult">
              <KeyboardArrowDownOutlinedIcon negative />
              <div className="resultAmount">Rs.12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last month</div>
            <div className="itemResult positive">
              < KeyboardArrowUpOutlinedIcon/>
              <div className="resultAmount">Rs.12k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured