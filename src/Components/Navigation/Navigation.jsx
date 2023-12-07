import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { FaSearch } from "react-icons/fa";
import { NavLinks } from '../../Constant/Data';
import './navigation.css';

const Navigation = ({ toggleDarkMode, isDarkMode }) => {
    const [isClick, setClick] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Function to handle scroll events and update isSticky
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Add an effect to apply the dark mode to the body when isDarkMode changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    // Function to toggle the mobile navigation
    const toggleNav = () => {
        setClick(!isClick);

        // Toggle scroll disable/enable
        const body = document.body;
        body.style.overflow = isClick ? 'auto' : 'hidden';
    };

    return (
        <>
            <nav
                className={`text-[#272343] ${isDarkMode ? 'dark-nav' : ''
                    } ${isSticky ? 'sticky' : ''}`}
            >
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between p-7">
                        <div>
                            <h1 className="logo text-4xl cursor-default">Recipe</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-10 ">
                                {NavLinks.map((links) => (
                                    <Link
                                        to={links.href}
                                        key={links.key}
                                        className="text-3xl tracking-wider bg-transparent"
                                    >
                                        {links.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                        
                            <FaSearch className={`text-[#272343] text-xl ${isDarkMode ? 'dark-nav' : ''
                    }`} />
                            <input
                                type="checkbox"
                                className="theme-checkbox"
                                checked={isDarkMode}
                                onChange={toggleDarkMode}
                            />
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 "
                                onClick={toggleNav}
                            >
                                {isClick ? (
                                    <span className="text-4xl">
                                        <RxCross2 />
                                    </span>
                                ) : (
                                    <span className="text-4xl">
                                        <HiOutlineBars3BottomRight />
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="bg-[#ff8906] text-[#fffffe] flex flex-col items-center justify-center gap-6 p-10 z-10 fixed top-28 left-0 right-0 ">
                            {NavLinks.map((links) => (
                                <Link
                                    to={links.href}
                                    key={links.key}
                                    className=" text-2xl block tracking-wider "
                                >
                                    {links.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navigation;
