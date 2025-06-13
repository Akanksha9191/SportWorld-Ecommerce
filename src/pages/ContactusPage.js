import React, { useState } from 'react';
import LogoComp from '../components/LogoComp';
import NavbarComp from '../components/Navbar';
import FooterComp from '../components/FooterComp';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Optionally send data to backend here
  };

  return (
    <>
    <LogoComp/>
    <NavbarComp/>
    <div className="p-4" style={{marginTop:'160px'}}>
        <h1 
            className="text text-center m-2" 
            style={{color:'darkblue', fontWeight:"bold"}}
        >
        Contact Us
        </h1>
    </div>
    <div className="flex justify-between center gap-10 p-6 m-auto">
    
      {submitted ? (
        <div className="text-green-600 text-center">Thank you for your message!</div>
        
      ) : (
        <div>
        <form onSubmit={handleSubmit} className="m-5 p-4 border border-3 w-auto" style={{background:'aliceblue'}}>
{/* Name */}
        <label for="name" className="block mb-1 mx-2 text fw-bold">Name</label>
        <br/>
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-100 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <br/><br/>
{/* Email */}
        <label for="email" className="block mb-1 mx-2 text fw-bold">Email</label>
        <br/>
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-100 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
          <br/><br/>
{/* message */}
        <label for="message" className="block mb-1 mx-2 text fw-bold">Message</label>
        <br/>
        <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-100 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
          <br/><br/>
         <div className='text text-center'>
             <button
            type="submit"
            className="p-2 text-light border-light rounded"
            style={{background:'darkblue'}}
          >
            Send Message
          </button>
         </div>
        </form>
        </div>
      )}
  
     {/* Right: Address and Map */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 p-5 m-5"
        src=''>
         <iframe
            title="SportWorld Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.239136586426!2d73.91369447507661!3d18.56262058253995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10f3d7f9f9d%3A0xd7fbc202abed5c56!2sShakti%20Sports!5e0!3m2!1sen!2sin!4v1717410038406!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-blue-900">Our Address</h2>
            <p>#34 A /6/19, Diagonally Opp. Phoenix Market City,<br />Next to Barclays, Nagar Road, Pune 411 014</p>

            <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-900">Customer Service</h2>
            <p>Timing: 11.00 am – 6.00 pm</p>
            <p>Phone: <a href="tel:+918896123123" className="text-blue-700">+91 88961 23123</a></p>
            <p>Email: <a href="mailto:bakanksha346@gmail.com" className="text-blue-700">info@sportworldpune.com</a></p>
            <p>Orders: <a href="mailto:bakanksha346@gmail.com" className="text-blue-700">orders@sportworldpune.com</a></p>
          </div>

         
        </div>
        </div>
        <FooterComp/>
    </>
  );
};

export default ContactUsPage;
