import React from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="websites" />
          <Widget type="subscribers" />
          <Widget type="campaigns" />
          <Widget type="notifications" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listcontainer">
          <div className="listTitle">latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home