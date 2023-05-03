import React from 'react'
import { NavBar } from './components/Nav/NavBar'
import { HomePage } from './components/Home/HomePage'
import { PointerCusor } from './components/Home/views/PointerCusor'
import { Skills } from './components/Skills/Skills'
import { Proyects } from './components/proyects/proyects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'


export const Portfolio = () => {
  return (
    <>
      <NavBar/>
      <HomePage/>
      <PointerCusor/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </>
  )
}
