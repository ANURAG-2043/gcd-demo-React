import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Navbar from "./components/Navbar";
import { AuthProvider } from './utils/AuthContext';

import Hero from "./components/Hero";
import Rate from "./components/Rate";
import Services from "./components/Services";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Footer from './components/Footer';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ServicePage from './pages/ServicePage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import DataSourcing from "./pages/DataSourcing";
import CityDatabases from "./pages/City_db"
import GlobalInformation from "./pages/Global_Info"
import Register from './pages/Register';

import FreeEdition from './pages/products/free'
import BasicEdition from './pages/products/basic'
import GoldEdition from './pages/products/gold'
import PremiumEdition from './pages/products/premium'
import PlatinumEdition from './pages/products/platinum'
import TitaniumEdition from './pages/products/titanium'
import MajorCitiesEdition from './pages/products/major_cities'
import LocationServiceEdition from './pages/products/location_search'




function App() {
  
  return (
    <>
      <Router>
        <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/gcd-demo-React" element={ <>
                <Hero />
                <Rate />
                <Services />
                <Features />
                <Reviews />
              </> }
          />

          <Route path="/data-sourcing" element={<DataSourcing />} />
          <Route path="/city_databases" element={<CityDatabases />} />
          <Route path="/global_information" element={<GlobalInformation />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service-page" element={<ServicePage />} />

          <Route path="/free" element={<FreeEdition />} />
          <Route path="/basic" element={<BasicEdition />} />
          <Route path="/gold" element={<GoldEdition />} />
          <Route path="/premium" element={<PremiumEdition />} />
          <Route path="/platinum" element={<PlatinumEdition />} />
          <Route path="/titanium" element={<TitaniumEdition />} />
          <Route path="/major-cities" element={<MajorCitiesEdition />} />
          <Route path="/location-service" element={<LocationServiceEdition />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </AuthProvider>
      </Router>
    </>
      );
    }

export default App;
