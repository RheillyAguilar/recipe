import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { HeroItemData } from "../../Constant/Data";
import HeroFavorite from "./HeroFavorite";

const HeroItem = ({ isDarkMode }) => {
    const [likedItems, setLikedItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    //wishlist per i.d also display it for the wishlist area
    const handleLikeClick = (itemId) => {
        setLikedItems((prevLikedItems) => {
            if (prevLikedItems.includes(itemId)) {
                return prevLikedItems.filter((id) => id !== itemId);
            } else {
                return [...prevLikedItems, itemId];
            }
        });
    };

    //function of next and prev button
    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroItemData.length);
    };
    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + HeroItemData.length) % HeroItemData.length);
    };

    // auto play and stop when hover
    useEffect(() => {
        let autoplayInterval;
        if (!isHovered) {
            autoplayInterval = setInterval(() => {
                handleNextSlide();
            }, 5000);
        }
        return () => clearInterval(autoplayInterval);
    }, [currentIndex, isHovered]);

    // infinite loop for the item
    const displayIndices = [
        (currentIndex - 1 + HeroItemData.length) % HeroItemData.length,
        currentIndex,
        (currentIndex + 1) % HeroItemData.length,
        (currentIndex + 2) % HeroItemData.length,
        (currentIndex + 3) % HeroItemData.length,
    ];

    return (
        <>
            <HeroFavorite likedItems={likedItems} setLikedItems={setLikedItems} isDarkMode={isDarkMode} />
            <h1 className="text-2xl px-4">Recipe</h1>
            <div
                className="pb-32 mt-2 relative overflow-hidden flex justify-center px-10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="slider-container flex gap-10 transition-transform ease-in-out duration-300">
                    {displayIndices.map((index) => (
                        <div
                            key={HeroItemData[index].id}
                            className={`w-[270px] bg-[#0f0e17] text-[#fffffe] rounded-2xl ${isDarkMode ? "dark-hero" : ""}`}>
                            <div className="flex items-center justify-center relative">
                                <img
                                    src={HeroItemData[index].image}
                                    alt=""
                                    className="h-[250px] w-full rounded-2xl"/>
                                <button
                                    className="absolute top-2 right-2 bg-[#0f0e17] rounded-full outline-none p-2"
                                    onClick={() => handleLikeClick(HeroItemData[index].id)}>
                                    <FaBookmark color={likedItems.includes(HeroItemData[index].id) ? "#FFBF00" : "#fffffe"} />
                                </button>
                            </div>

                            <div className="p-5">
                                <h1 className="text-2xl text-center mb-3 tracking-widest">{HeroItemData[index].title}</h1>
                                <p className="text-base mb-5 h-[130px] overflow-hidden">{HeroItemData[index].description}</p>
                                <div className="text-center">
                                    <Link to={HeroItemData[index].destination}>
                                        <button
                                            className={` bg-[#ff8906] text-[#fffffe] px-5 py-1.5 rounded-lg hover:text-[#ff8906] hover:bg-[#fffffe] duration-200 ease-in-out ${isDarkMode ? "dark-button" : ""}`}>
                                            See Procedure
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="mx-3 outline-none absolute left-0 top-[40%] transform -translate-y-1/2 rounded-full bg-[#ff8906] text-[#fffffe]  text-3xl"
                    onClick={handlePrevSlide}>
                    <GrFormPrevious />
                </button>
                <button
                    className="mx-3 outline-none absolute right-0 top-[40%] transform -translate-y-1/2 rounded-full bg-[#ff8906] text-[#fffffe]  text-3xl"
                    onClick={handleNextSlide}>
                    <MdNavigateNext />
                </button>
            </div>
        </>
    );
};

export default HeroItem;
