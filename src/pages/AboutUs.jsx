import React from 'react';

const AboutUs = () => {
  return (
    <div className="mt-24 mb-24 px-6 lg:px-16">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        About Us
      </h1>

      <p className="text-lg leading-8 text-gray-700 mb-8 text-center max-w-4xl mx-auto">
        Welcome to <strong>GeoCityDatabase</strong>, your premier source for comprehensive city characteristics and global information services. We pride ourselves on simplifying access to accurate, up-to-date data on cities, nations, and regions worldwide. Whether you are an academic, an analyst, or a business professional, GeoCityDatabase is your trusted partner for research and analysis.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-16 mb-6">
        Who We Are
      </h2>
      <p className="text-lg leading-8 text-gray-700 mb-8">
        GeoCityDatabase is a dynamic platform designed to deliver reliable insights and valuable data to support wise judgments and informed decision-making. With a user-friendly interface and expertly curated content, we cater to a diverse audience seeking quality information about cities and global regions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-16 mb-6">
        What We Offer
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-4">
        <li>
          <strong>Comprehensive City Characteristics Database:</strong> Access detailed data on cities worldwide, including demographics, economic indicators, and political environments.
        </li>
        <li>
          <strong>Global Information Services:</strong> Gain insights into various nations and regions, offering critical data to support research and analysis.
        </li>
        <li>
          <strong>Data Sourcing Services:</strong> Experience high-quality, accurate, and comprehensive data to meet your research and analytical needs.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-16 mb-6">
        Why Choose Us?
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-4">
        <li>Accurate and up-to-date information that is always reliable.</li>
        <li>User-friendly platform for effortless navigation.</li>
        <li>Trusted by thousands with a 4.8-star rating and over 2,394 satisfied customers.</li>
        <li>Essential tool for academics, analysts, businesses, and other professionals seeking reliable insights.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-16 mb-6">
        Testimonials
      </h2>
      <div className="space-y-8">
        <blockquote className="bg-gray-100 p-6 rounded-lg text-gray-700 shadow">
          <p className="italic">
            &ldquo;GeoCityDatabase offers an impressive database with accurate and up-to-date information on cities worldwide. Their data sourcing services are second to none, and their customer support is excellent.&rdquo;
          </p>
          <footer className="mt-4 text-right text-gray-800 font-bold">
            &mdash; John Carter
          </footer>
        </blockquote>
        <blockquote className="bg-gray-100 p-6 rounded-lg text-gray-700 shadow">
          <p className="italic">
            &ldquo;GeoCityDatabase’s data sourcing services have helped us gain valuable insights into our industry. Their comprehensive city characteristics database is an excellent resource, and their team is always helpful and responsive.&rdquo;
          </p>
          <footer className="mt-4 text-right text-gray-800 font-bold">
            &mdash; Dan Abromov
          </footer>
        </blockquote>
        <blockquote className="bg-gray-100 p-6 rounded-lg text-gray-700 shadow">
          <p className="italic">
            &ldquo;We rely on GeoCityDatabase’s global information services to support our business decisions. Their platform provides accurate and reliable data, and their team is always available to assist with our needs.&rdquo;
          </p>
          <footer className="mt-4 text-right text-gray-800 font-bold">
            &mdash; Julie Robinson
          </footer>
        </blockquote>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-16 mb-6">
        Features & Benefits
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-4">
        <li>Comprehensive and detailed data.</li>
        <li>Reliable insights for various sectors.</li>
        <li>Essential resource for businesses and academia.</li>
        <li>Easy access to global information services.</li>
        <li>A valuable tool for supporting research and analysis.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
