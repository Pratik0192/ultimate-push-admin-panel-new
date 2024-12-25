import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from  './pages/single/Single'
import { BrowserRouter, Router, Route, Routes  } from 'react-router-dom';
import Settings from './pages/settings/Settings'
import Profile from './pages/profile/Profile'
import Notification from './pages/notification/Notification'
import AddPricing from './pages/Pricing/AddPricing'
import AddFeature from './pages/Features/AddFeature'
import Testimonial from './pages/Testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={ <Home/> }/>
            <Route path='login' element={ <Login /> } />
            <Route path='websites' >
              <Route index element={ <List /> } />
              <Route path=':userId' element={ <Single /> } />
            </Route>
            <Route path='products' >
              <Route index element={ <List /> } />
              <Route path=':productId' element={ <Single /> } />
            </Route>
          </Route>
          <Route path='/login' element={ <Login /> } />
          <Route path='/settings' element={ <Settings /> } />
          <Route path='/profile' element ={ <Profile /> } />
          <Route path='/notification' element= { <Notification /> } />
          <Route path='/pricing' element = { <AddPricing /> } />
          <Route path='/features' element = { <AddFeature /> } />
          <Route path='/testi' element = { <Testimonial /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App