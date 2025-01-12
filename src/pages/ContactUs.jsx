import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for more information.</p>
      <div className="text-center my-24">
        <h1 className="uppercase text-3xl my-4">contact us</h1>
        <a href="#"><h2 className="my-4 text-2xl font-email">geocitydatabase@gmail.com</h2></a>
        <a href="#"><h2 className="my-4 text-xl font-reg">www.geocitydatabase.com</h2></a>
        <a href="#"><h2 className="my-4 text-xl text-slate-700">we love our customer, so feel free to contact us</h2></a>
        <a href="#"><h2 className="my-4 text-xl font-semibold font-reg">GeoCityDatabase</h2></a>
     </div>
    </div>
  );
};

export default ContactUs;
