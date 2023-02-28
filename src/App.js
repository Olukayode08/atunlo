import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StoryAbout from './pages/StoryAbout'
import TeamAbout from './pages/TeamAbout'
import PickupServices from './pages/PickupServices'
import DropoffServices from './pages/DropoffServices'
import CorporateServices from './pages/CorporateServices'
import Contact from './pages/Contact'
import OurPartners from './components/OurPartners'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/services' element={<PickupServices />} /> */}
        {/* <Route path='/services' element={<DropoffServices />} /> */}
        <Route path='/services' element={<CorporateServices />} />
        <Route path='/about' element={<StoryAbout />} />
        <Route path='/about' element={<TeamAbout />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <OurPartners />
      <Footer />
    </>
  )

}

export default App
