import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import card1 from "../assets/images/cards/GooglePay.png"
import card2 from "../assets/images/cards/Discover.png"
import card3 from "../assets/images/cards/Mastercard.png"
import card4 from "../assets/images/cards/Visa.png"
import card5 from "../assets/images/cards/PayPal.png"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Legal</h3>
                        <ul>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Privacy Policy</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Terms of Service</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Return Policy</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Cookie Policy</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Disclaimer</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Information</h3>
                        <ul>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">About Us</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Blog</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">FAQs</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Shipping Info</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Store Locator</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Accounts</h3>
                        <ul>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">My Account</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Order History</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Wishlist</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Track Order</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Gift Cards</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                        <ul>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Contact Us</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Support</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-pink-500">Feedback</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <div className='flex flex-col'>
                        <p className="text-gray-400 mb-2 text-sm">Follow Us:</p>
                        <div className=' flex justify-center space-x-4'>
                            <Link to="/" className="text-gray-400 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white p-2 rounded-full transition-colors duration-300">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </Link>
                            <Link to="/" className="text-gray-400 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white p-2 rounded-full transition-colors duration-300">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </Link>
                            <Link to="/" className="text-gray-400 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white p-2 rounded-full transition-colors duration-300">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </Link>
                            <Link to="/" className="text-gray-400 hover:bg-gradient-to-r from-pink-500 to-purple-500 hover:text-white p-2 rounded-full transition-colors duration-300">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-400">&copy; 2024 Your Company. All Rights Reserved.</p>
                    <div>
                    <p className="text-gray-400 mb-2 text-sm">We Accept</p>
                    <ul className="flex space-x-4">
                        <li>
                            <img src={card1} alt="Visa" className="h-6" />
                        </li>
                        <li>
                            <img src={card2} alt="MasterCard" className="h-6" />
                        </li>
                        <li>
                            <img src={card3} alt="American Express" className="h-6" />
                        </li>
                        <li>
                            <img src={card4} alt="Discover" className="h-6" />
                        </li>
                        <li>
                            <img src={card5} alt="Discover" className="h-6" />
                        </li>
                    </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
