import React from 'react'
import './List.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import { Table } from '@mui/material'

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar/>
        <Table />
      </div>
    </div>
  )
}

export default List