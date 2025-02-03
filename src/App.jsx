
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import { Route, Routes } from 'react-router-dom'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/contact'

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<MyWork />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      
    </div>
  )
}

export default App
