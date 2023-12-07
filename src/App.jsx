import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Form from './components/Form'
const App = () => {
  return (
    <div className='bg-[#ffffff] h-screen'>
      <Navbar/>
      <div className='flex justify-between max-w-[72rem] m-auto mt-[5rem]'>
        <Hero/>
        <Form/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
