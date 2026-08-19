import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import TopNavbar from './components/topNavbar'
const App = () => {
  return (
    <BrowserRouter>
    <div>
      <TopNavbar />
      <main className='pt-20'>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
        </main>
    </div>
    </BrowserRouter>
  )
}

export default App
