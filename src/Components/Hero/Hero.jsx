import React, { useState, useEffect, useRef } from 'react';
import './hero.css';
import { HeroData } from '../../Constant/Data';
import { Link } from 'react-router-dom';
import HeroChoice from './HeroChoice';
import HeroFavorite from './HeroFavorite';
import HeroItem from './HeroItem';

const Hero = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % HeroData.length);
      }, 8000); // Adjust the interval as needed
    };

    startInterval(); // Start the interval initially

    // Cleanup on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current); // Pause the transition
  };

  const handleMouseLeave = () => {
    startInterval(); // Resume the transition
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % HeroData.length);
    }, 8000); // Adjust the interval as needed
  };

  return (
    <>
      <section className="mx-auto max-w-[100rem] relative">
        {HeroData.map((hero, index) => (
          <div
            key={hero.id}
            className={`mx-3 flex items-center justify-between rounded-2xl bg-[#0f0e17] text-[#fffffe] home-content ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            } ${isDarkMode ? 'dark-hero' : ''} transition-opacity duration-1000 ease-in-out`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: index === currentSlide ? 'flex' : 'none' }}
          >
            <img src={hero.image} alt="" className="rounded-2xl w-full md:w-[800px] h-auto md:h-full" />

            <div className="px-5 md:px-40 text">
              <h1 className="text-3xl md:text-5xl mb-3 md:mb-5">{hero.title}</h1>
              <p className="text-base md:text-xl mb-5 md:mb-10">{hero.description}</p>
              <Link>
                <button className={`button bg-[#ff8906] text-base md:text-xl text-[#fffffe] px-3 md:px-5 py-2 md:py-3 rounded-lg hover:text-[#ff8906] hover:bg-[#fffffe] duration-200 ease-in-out ${
                  isDarkMode ? 'dark-button' : ''
                }`}>Explore</button>
              </Link>
            </div>
          </div>
        ))}
        <HeroChoice isDarkMode={isDarkMode} />
        <HeroFavorite />
        <HeroItem isDarkMode={isDarkMode}/>
      </section>
    </>
  );
};

export default Hero;
