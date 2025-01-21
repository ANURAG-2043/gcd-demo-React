import React from 'react';
import { Link } from 'react-router-dom';
import free_img from "../images/productImages/cities-free.png";
import basic_img from "../images/productImages/basic.jpg"
import gold_img from "../images/productImages/cities-gold-top.png"
import platinum_img from "../images/productImages/cities-platinum.png"
import premium_img from "../images/productImages/cities-premium.png"
import titanium_img from "../images/productImages/cities-titanium-top.png"

const ProductPage  = () => {
  return (
    <>
      <section className="py-8 mt-[100px]">
        <h1 className="text-2xl font-bold text-center mb-[50px]">Services</h1>
        <div className="grid grid-cols-4 gap-8 place-items-center mx-auto max-w-6xl">
          <div className="product_images text-center">
            <img src={free_img} alt="Free Edition" className="w-[180px] h-[210px] "
            />
            <Link to="/free" className="text-blue-500 hover:underline mt-2 block">
              <p>
                <span>World Cities Database</span><br />
                <span>Free Edition</span>
              </p>
            </Link>
          </div>
          <div className="product_images text-center">
            <img src={basic_img} alt="Basic Edition" className="w-[180px] h-[210px]"
            />
              <Link to="/basic" className="text-blue-500 hover:underline mt-2 block">
                <p>
                  <span>World Cities Database </span><br />
                  <span>Basic Edition</span>
                </p>
              </Link>
            </div>
            <div className="product_images text-center">
              <img src={premium_img} alt="Premium Edition" className="w-[180px] h-[210px]" />
              <Link to="/premium" className="text-blue-500 hover:underline mt-2 block">
                <p>
                  <span>World Cities Database </span><br />
                  <span>Premium Edition</span>
                </p>
              </Link>
            </div>
            <div className="product_images text-center">
              <img src={gold_img} alt="Gold Edition" className="w-[180px] h-[210px]" />
              <Link to="/gold" className="text-blue-500 hover:underline mt-2 block">
                <p>
                  <span>World Cities Database </span><br />
                  <span>Gold Edition</span>
                </p>
              </Link>
            </div>
            <div className="product_images text-center">
              <img src={platinum_img} alt="Platinum Edition" className="w-[180px] h-[210px]" />
              <Link to="/platinum" className="text-blue-500 hover:underline mt-2 block">
                <p>
                  <span>World Cities Database</span><br />
                  <span>Platinum Edition</span>
                </p>
              </Link>
            </div>
            <div className="product_images text-center">
              <img src={titanium_img} alt="Titanium Edition" className="w-[180px] h-[210px]" />
              <Link to="/titanium" className="text-blue-500 hover:underline mt-2 block">
                <p>
                  <span>World Cities Database</span><br />
                  <span>Titanium Edition</span>
                </p>
              </Link>
            </div>
            <div className="product_images text-center">
              <img
                src="https://www.geodatasource.com/images/products/major-cities.png"
                alt="Major Cities"
                className="w-[180px] h-[210px]"
              />
              <Link to="/major-cities" className="text-blue-500 hover:underline mt-2 block">
                <p>
                  <span>World Major Cities</span><br />
                  <span>Database</span>
                </p>
              </Link>
            </div>
            <div className="product_images text-center">
              <img
                src="https://www.geodatasource.com/images/products/web-service-location-search.png"
                alt="Location Search Web Service"
                className="w-[180px] h-[210px]"
              />
              <Link to="/location-service" className="text-blue-500 hover:underline mt-2 block">
                <p>
                  <span>Location Search </span><br />
                  <span>Web Service</span>
                </p>
              </Link>
            </div>
          </div>
        </section>
            </>
  );
};

export default ProductPage;

