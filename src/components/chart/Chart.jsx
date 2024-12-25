import React from 'react'
import './Chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    subscribed: 40,
    unSubscribed: 24,
  },
  {
    name: 'Tuesday',
    subscribed: 30,
    unSubscribed: 13,
  },
  {
    name: 'Wednesday',
    subscribed: 20,
    unSubscribed: 98,
  },
  {
    name: 'Thursday',
    subscribed: 27,
    unSubscribed: 39,
  },
  {
    name: 'Friday',
    subscribed: 18,
    unSubscribed: 48,
  },
  {
    name: 'Saturday',
    subscribed: 23,
    unSubscribed: 38,
  },
  {
    name: 'Sunday',
    subscribed: 34,
    unSubscribed: 43,
  },
];

const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Last 7 Days</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="subscribed" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
          <Area type="monotone" dataKey="unSubscribed" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart