import React, { useEffect } from 'react'
import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import CustomerTable from '../../components/customerTable/CustomerTable'

import { 
  fetchAllDomains,
  getDomainsCount,
  getSubscribersCount,
  getCampaignsCount,
  getNotificationsCount
} from '../../store/domainSlice';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
  const dispatch = useDispatch();
  const { 
    data, 
    domainCount, 
    subscriberCount, 
    campaignCount, 
    notificationCount 
  } = useSelector((state) => state.domains);

  useEffect(() => {
    const fetchAsync = async () => {
      //await dispatch(fetchAllDomains());
      await dispatch(getDomainsCount());
      await dispatch(getSubscribersCount());
      await dispatch(getCampaignsCount());
      await dispatch(getNotificationsCount());
    }
    
    fetchAsync();
  }, []);

  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="websites" quantity={domainCount} />
          <Widget type="subscribers" quantity={subscriberCount} />
          <Widget type="campaigns" quantity={campaignCount} />
          <Widget type="notifications" quantity={notificationCount} />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listcontainer">
          <div className="listTitle">latest Websites</div>
          <Table />
        </div>
        <div className="listcontainer">
          <div className="listTitle">All Customers</div>
          <CustomerTable />
        </div>
      </div>
    </div>
  )
}

export default Home