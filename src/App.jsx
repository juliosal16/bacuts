import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './NavigationBar'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About/About'
import Barbers from './Pages/Barbers/Barbers'
import Pricing from './Pages/Pricing/Pricing'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import ShopInfo from './Pages/ShopInfo/ShopInfo'
import OurMission from './Pages/OurMission/OurMission'
import BookNow from './Pages/BookNow/BookNow'


function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/bay_area_cuts/about' element={<About />} />
        <Route path='/bay_area_cuts/ourMission' element={<OurMission />} />
        <Route path='/bay_area_cuts/barbers' element={<Barbers />} />
        <Route path='/bay_area_cuts/pricing' element={<Pricing />} />
        <Route path='/bay_area_cuts/contact' element={<Contact />} />
        <Route path='/bay_area_cuts/' element={<Home />} />
        <Route path='/bay_area_cuts/bookNow' element={<BookNow />} />

      </Routes>
      <ShopInfo />

    </>
  )
}

export default App
