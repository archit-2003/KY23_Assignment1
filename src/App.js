import React from "react";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function App() {

  return (<>
     <div class="relative bg-teal-100 border-4 border-teal-300 p-8">
    <nav class="container mx-auto">
      <div class="max-w-4xl h-12 nd:h-16 mx-auto flex justify-between align-stretch px-4">
        <div id="logo" class="flex items-center text-blue-600 font-bold">
          <a href="/">ARCHIT GALLERY</a>
        </div>
        <ul id="nav-links" class="hidden md:block absolute md:relative md:flex md:align-stretch md:justify-end right-0 top-0 mt-10 md:mt-0 py-2 md:py-0 w-48 md:w-auto h-auto z-10 bg-white shadow md:shadow-none">
          <li>
            <a class="w-full h-full flex md:items-center pl-6 md:pl-4 pr-4 py-1 hover:bg-gray-100" href="#">CAROUSEL</a>
          </li>
        </ul>
        <div class="md:hidden flex items-center">
          <button id="menu-button" class="p-1 rounded-full focus:outline-none">
            <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path id="menu-icon" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>

    <div className="App">
      <Slider
         dots={true}
         slidesToShow={1}
         slidesToScroll={1}
         autoplay={true}
         infinite={true}
         autoplaySpeed={3000}
         adaptiveHeight={true}
      >
         <div>
            <img style={{ width: '50%', maxHeight: '450px' }} src="https://images.unsplash.com/photo-1657299142312-5e12a754ff0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="m" />
          </div>
          <div>
            <img style={{ width: '50%', maxHeight: '450px' }} src="https://images.unsplash.com/photo-1657299156538-e08595d224ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="m" />
          </div>
          <div>
            <img style={{ width: '50%', maxHeight: '450px' }} src="https://images.unsplash.com/photo-1660239178900-f765ff46538a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="m" />
          </div>
          <div>
            <img style={{ width: '50%', maxHeight: '450px' }} src="https://images.unsplash.com/photo-1660296445573-7d08f5842f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="m" />
          </div>
      </Slider>
    </div>
  </>
    
  );
}
