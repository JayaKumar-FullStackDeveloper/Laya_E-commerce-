import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheckCircle, faHeadset, faLock } from '@fortawesome/free-solid-svg-icons';

const NewsletterSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Subscribe to Our Newsletter</h2>
        <form className="flex flex-col sm:flex-row items-center justify-center mb-6">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-3 border border-gray-300 rounded-lg sm:mr-4 mb-4 sm:mb-0 w-full sm:w-auto"
          />
          <button 
            type="submit" 
            className="p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div className="p-4  bg-pink-100 rounded-lg hover:shadow-md text-center">
            <FontAwesomeIcon icon={faTruck} size="3x" className="text-pink-600 mb-2"/>
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Free delivery</h3>
            <p>Free delivery on orders above <br />Rs. 499</p>
          </div>
          <div className="p-4 bg-pink-100 rounded-lg hover:shadow-md text-center">
            <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-pink-600 mb-2"/>
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Only the best products</h3>
            <p>We stock only the best products sourced directly from brands to ensure you have the best experience</p>
          </div>
          <div className="p-4 bg-pink-100 rounded-lg hover:shadow-md text-center">
            <FontAwesomeIcon icon={faHeadset} size="3x" className="text-pink-600 mb-2"/>
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Top-notch support</h3>
            <p>To help you with anything related to orders or help with choosing products</p>
          </div>
          <div className="p-4 bg-pink-100 rounded-lg hover:shadow-md text-center">
            <FontAwesomeIcon icon={faLock} size="3x" className="text-pink-600 mb-2"/>
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Secure payments</h3>
            <p>We use state of the art payment gateways to keep your private information safe</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
