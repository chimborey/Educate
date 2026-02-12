import React from 'react'
import Hero from '../Components/Hero'
import States from '../Components/States'
import Cateagory from '../Components/Cateagory'
import Innovatice from '../Components/Innovatice'
import Popular from '../Components/Popular'
import Group from '../Components/Group'
import Experience from '../Components/Experience'
import Latest from '../Components/Latest'
import Contact from './Contact'
const Home = () => {
  return (
    <div>
      <Hero />
      <States />
      <Cateagory />
      <Innovatice />
      <Popular />
      <Group />
      <Experience />
      <Latest />
      <Contact />
    </div>
  )
}

export default Home