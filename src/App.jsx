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
import Register from './pages/register/Register'
import ViewPricing from './pages/Pricing/ViewPricing'
import ViewTestimonial from './pages/Testimonial/ViewTestimonial'
import ViewFeature from './pages/Features/ViewFeature'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/dashboard' element={ <Home/> }/>
          <Route path='/websites' element= { <List /> } />
          <Route path='/settings' element={ <Settings /> } />
          <Route path='/profile' element ={ <Profile /> } />
          <Route path='/notification' element= { <Notification /> } />
          <Route path='/viewpricing' element = { <ViewPricing /> } />
          <Route path='/addpricing' element = { <AddPricing /> } />
          <Route path='/viewfeatures' element = { <ViewFeature /> } />
          <Route path='/addfeatures' element = { <AddFeature /> } />
          <Route path='/viewtesti' element = { <ViewTestimonial /> } />
          <Route path='/addtesti' element = { <Testimonial /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App