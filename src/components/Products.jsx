import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
// import computer from "../images/computer.jpg";
// import map from '../images/map.jpg';
import free_img from "../images/productImages/cities-free.png";
import basic_img from "../images/productImages/basic.png"
import gold_img from "../images/productImages/cities-gold-top.png"
import platinum_img from "../images/productImages/cities-platinum.png"
import premium_img from "../images/productImages/cities-premium.png"
import titanium_img from "../images/productImages/cities-titanium-top.png"
import location_search from "../images/productImages/web-service-location-search.png"
import major_cities from "../images/productImages/major-cities.png"

class Products extends PureComponent {
    render() {
        return (
          <>
          <h1 className="text-center text-4xl font-reg max-md:text-2xl max-md:py-4 font-medium py-6">
            Our Products
          </h1>
          <div className="grid grid-cols-4 gap-8 place-items-center mx-auto max-w-6xl">
            <div className="product_images text-center">
              <img src={free_img} alt="Free Edition" className="w-[180px] h-[210px] "
              />
              <Link to="/free" className="text-blue-500 hover:underline mt-2 block">
                <p>
                  <span>Free</span><br />
                  <span>GeoCityDatabase</span>
                </p>
              </Link>
            </div>
            <div className="product_images text-center">
              <img src={basic_img} alt="Basic Edition" className="w-[180px] h-[210px]"
              />
                <Link to="/basic" className="text-blue-500 hover:underline mt-2 block">
                  <p>
                    <span>Essential</span><br />
                    <span>GeoCityDatabase</span>
                  </p>
                </Link>
              </div>
              <div className="product_images text-center">
                <img src={premium_img} alt="Premium Edition" className="w-[180px] h-[210px]" />
                <Link to="/premium" className="text-blue-500 hover:underline mt-2 block">
                  <p>
                    <span>Exclusive</span><br />
                    <span>GeoCityDatabase</span>
                  </p>
                </Link>
              </div>
              <div className="product_images text-center">
                <img src={gold_img} alt="Gold Edition" className="w-[180px] h-[210px]" />
                <Link to="/gold" className="text-blue-500 hover:underline mt-2 block">
                  <p>
                    <span>Elite</span><br />
                    <span>GeoCityDatabase</span>
                  </p>
                </Link>
              </div>
              <div className="product_images text-center">
                <img src={platinum_img} alt="Platinum Edition" className="w-[180px] h-[210px]" />
                <Link to="/platinum" className="text-blue-500 hover:underline mt-2 block">
                  <p>
                    <span>Ultimate</span><br />
                    <span>GeoCityDatabase – with utf8 </span>
                  </p>
                </Link>
              </div>
              <div className="product_images text-center">
                <img src={titanium_img} alt="Titanium Edition" className="w-[180px] h-[210px]" />
                <Link to="/titanium" className="text-blue-500 hover:underline mt-2 block">
                  <p>
                    <span>Major Cities</span><br />
                    <span>GeoCityDatabase – with utf8</span>
                  </p>
                </Link>
              </div>
              <div className="product_images text-center">
                <img
                  src={location_search} alt="Major Cities"
                  className="w-[180px] h-[210px]"
                />
                <Link to="/major-cities" className="text-blue-500 hover:underline mt-2 block">
                  <p>
                    <span>Cities ZIPCode</span><br />
                    <span>Database</span>
                  </p>
                </Link>
              </div>
              <div className="product_images text-center">
                <img
                  src={major_cities} alt="VIP/Paramount [Custom Made]
GeoCityDatabase"
                  className="w-[180px] h-[210px]"
                />
                <Link to="/location-service" className="text-blue-500 hover:underline mt-2 block">
                  <p>
                    <span>VIP/Paramount [Custom Made]</span><br />
                    <span>GeoCityDatabase</span>
                  </p>
                </Link>
              </div>
            </div>
            

        {/* <div className="flex flex-row font-reg tracking-wide text-center max-md:flex-col">
          <div className="w-[350px] max-md:w-[160px]  border ml-20 max-md:ml-6 ">
            <img src={computer} alt="Laptop" className="h-[px] w-full  object-cover" />
            <div className="p-4 max-md:p-2">
            <h1 className="text-lg font-reg font-semibold">Global Information</h1>
            <p className="mt-3 max-md:mt-2 max-md:text-xs text-sm text-gray-600 text-balance ">
            Our Global Information service provides a range of information on various nations and regions, including economic indicators, demographics, political enviornment and more, supporting your research ....
            </p>
            <Link to="/global_information">
            <button type="button" 
            className="mt-4 max-md:mt-2 rounded-sm bg-transparent px-2.5 py-1 text-[12px]  text-green-600 shadow-sm hover:bg-white/80 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Read More </button>
            </Link>
            </div>
          </div>

          <div className="w-[350px] max-md:w-[160px] border ml-20 max-md:ml-6 max-md:mt-5">
            <img src={map} alt="Laptop" className="h-[px] w-full  object-cover"/>
            <div className="p-4 max-md:p-2">
            <h1 className="text-lg font-reg font-semibold">City Database</h1>
            <p className="mt-3 text-sm text-gray-600 text-balance max-md:mt-2 max-md:text-xs">
            Our City Database provides comprehensive information on cities worldwide, making it an excellent resource for academics, analysts, and others seeking accurate and current information.
            </p>
            <Link to="/city_databases">
              <button type="button"
              className="mt-4 max-md:mt-2 rounded-sm bg-transparent px-2.5 py-1 text-[12px]  text-green-600 shadow-sm hover:bg-white/80 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Read More </button>
            </Link>
            </div>
          </div>

          <div className="w-[350px] max-md:w-[160px] border ml-20 max-md:ml-6 max-md:mt-5">
            <img src={computer} alt="Laptop" className="h-[px] w-full  object-cover"/>
            <div className="p-4 max-md:p-2">
            <h1 className="text-lg font-reg font-semibold">Data Sourcing</h1>
            <p className="mt-3 text-sm text-gray-600 text-balance max-md:mt-2 max-md:text-xs">
            Our Data Sourcing services provide high quality, accurate and comprehensive datato support your research and analysis needs.
            </p>
            <Link to="/data-sourcing">
              <button
                type="button"
                className="mt-4 max-md:mt-2 rounded-sm bg-transparent px-2.5 py-1 text-[12px] text-green-600 shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                Read More
              </button>
            </Link>
            </div>
          </div>   
          </div> */}
          </> 
        )
    }
}

export default Products