import React from 'react';
import './CustomerDataBody.scss';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import WebIcon from '@mui/icons-material/Web';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CustomerDataBody = () => {
  const customerData = [
    { label: 'Customer Name', value: 'John Doe', icon: <PersonIcon /> },
    { label: 'Plan Name', value: 'Basic Plan', icon: <WebIcon /> },
    { label: 'Plan Start Date', value: '2024-01-01', icon: <EventIcon /> },
    { label: 'Plan End Date', value: '2024-12-31', icon: <EventIcon /> },
    { label: 'No of Websites', value: '5', icon: <WebIcon /> },
    { label: 'State', value: 'West Bengal', icon: <LocationOnIcon /> },
    { label: 'Country', value: 'India', icon: <LocationOnIcon /> },
  ];

  return (
    <div className="customer-data-container">
      <h1 className="heading">Customer Details</h1>
      <div className="card-grid">
        {customerData.map((data, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <span className="card-label">{data.label}</span>
              <span className="card-icon">{data.icon}</span>
            </div>
            <div className="card-value">{data.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDataBody;
