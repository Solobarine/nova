import { Routes, Route, Outlet } from 'react-router-dom'
import Login from './components/auth/Login'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Register from './components/auth/Register'
import Series from './components/series/Series'
import Genre from './components/genres/Genre'
import Genres from './components/genres/Genres'
import HotSeries from './components/series/HotSeries'
import SideBar from './components/layout/SideBar'
import Landing from './components/layout/Landing'
import AuthCheck from './components/auth/AuthCheck'
import AboutUs from './components/layout/AboutUs'
import ContactUs from './components/layout/ContactUs'

function App() {

  return (
    <section id='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="login" element={<Login/>} />
        <Route path='register' element={<Register/>}/>
        <Route path='/' element={<AuthCheck/>}>
          <Route path='/' element={<section id='content'>
            <Outlet/>
            <SideBar/>
          </section>}>
            <Route path='/series/:series_id' element={<Series/>}/>
            <Route path='/categories/:category' element={<Genre/>}/>
            <Route path='/series' element={<HotSeries/>}/>
          </Route>
          <Route path='/categories' element={<Genres/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/contact-us' element={<ContactUs/>}/>
        </Route>
      </Routes>
      <Footer/>
    </section>
  )
}

export default App
