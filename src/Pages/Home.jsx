import React, { useState } from 'react'
import Navigation from '../Components/Navigation/Navigation'
import Hero from '../Components/Hero/Hero'

const Home = () => {

  const [isDarkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <Navigation toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero isDarkMode={isDarkMode}/>
      
    </>
  )
}

export default Home