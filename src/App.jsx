import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Nav from './components/Nav'
import Name from './components/Name'
import Skills from './components/Skills'
import Services from './components/Services'
import Services2 from './components/Services2'
import Services3 from './components/Services3'
import Portfolio from './components/Portfolio'
import Tell from './components/Tell'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Name />
      <Skills/>
      <Services/>
      <Services2/>
      <Services3/>
      <Portfolio/>
      <Tell/>
      <Footer/>
    </>
  )
}

export default App
