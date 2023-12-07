import React from "react";
import { HeroItemData } from "../../Constant/Data";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroFavorite = ({ likedItems, setLikedItems, isDarkMode }) => {

  // function when unwishlist the card will remove it to wishlist area 
  const removeItemFromFavorites = (itemId) => {
    const updatedLikedItems = likedItems.filter((id) => id !== itemId);
    setLikedItems(updatedLikedItems);
  };

  // if they have no wishlist return to no display 
  if (!likedItems || likedItems.length === 0 || !HeroItemData) {
    return null;
  }

  
  // custom arrow
  const CustomNextArrow = (props) => (
    <div onClick={props.onClick} className="cursor-pointer outline-none absolute right-0 top-1/2 transform -translate-y-1/2 mx-3 rounded-full bg-[#ff8906] text-[#fffffe] text-3xl">
      <MdNavigateNext />
    </div>
  );
  
  const CustomPrevArrow = (props) => (
    <div onClick={props.onClick} className="cursor-pointer z-10 outline-none absolute left-0 top-1/2 transform -translate-y-1/2 mx-3 rounded-full bg-[#ff8906] text-[#fffffe] text-3xl">
      <GrFormPrevious />
    </div>
  );
    

  // call tthe heroitemdata to favoriteitem to display it 
  const favoriteItems = HeroItemData.filter((item) => likedItems.includes(item.id));

  // when they 1 card or image adjust the width of image to avoid the blur effect of image
  const cardWidth = favoriteItems.length === 1 ? "50%" : "100%";

  // responsive and the setting of slider
  const sliderSettings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    nextArrow: <CustomNextArrow/>,
    slidesToShow: Math.min(favoriteItems.length, 5),
    prevArrow: <CustomPrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(favoriteItems.length, 3),
        }
      },
      {
        breakpoint: 546,
        settings: {
          slidesToShow: Math.min(favoriteItems.length, 2),
        }
      },
      {
        breakpoint: 430,
        settings:{
          slidesToShow: Math.min(favoriteItems.length, 1),
        }
      }
    ]
  };

  return (
    <>
      <h1 className="text-2xl px-4">Favorite</h1>
      <div>
        <Slider {...sliderSettings}>
          {favoriteItems.map((item) => (
            <div key={item.id} className='mb-10 mt-2 relative px-5'>
              <div className="relative mx-auto" style={{ width: cardWidth }}>
                <img src={item.image} alt="" className="h-[250px] w-full rounded-2xl" />
                <button
                  className="absolute top-2 right-2 bg-[#0f0e17] rounded-full p-1.5"
                  onClick={() => removeItemFromFavorites(item.id)}>
                  <FaBookmark color={likedItems.includes(item.id) ? "#FFBF00" : "#fffffe"} />
                </button>
              </div>
              <Link className="absolute top-[30%] left-1/2 -translate-x-1/2 translate-y-1/2" to={item.destination}>
                <button
                  className={`button bg-[#ff8906] text-[#fffffe] px-5 py-1 rounded-lg hover:text-[#ff8906] hover:bg-[#fffffe] duration-200 ease-in-out ${
                    isDarkMode ? "dark-button" : ""}`}>
                  See Procedure
                </button>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroFavorite;
