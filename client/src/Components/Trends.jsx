import React from 'react'
import img1 from '../assets/images/trends/ahair-care.png';
import img2 from '../assets/images/trends/hair-tools.png';
import img3 from '../assets/images/trends/health_bae.png';
import img4 from '../assets/images/trends/lip-care.png';
import img5 from '../assets/images/trends/moist.png';
import img6 from '../assets/images/trends/skincare.png';
const trends = [
    { id: 1, src: img1, alt: "Trend 1" },
    { id: 2, src: img2, alt: "Trend 2" },
    { id: 3, src: img3, alt: "Trend 3" },
    { id: 4, src: img4, alt: "Trend 4" },
    { id: 5, src: img5, alt: "Trend 5" },
    { id: 6, src: img6, alt: "Trend 6" }
  ];

function Trends() {
  return (
    <div className='py-8'>
        <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-3xl font-bold mb-6 text-center">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trends.map(trend => (
            <div key={trend.id} className="relative overflow-hidden aspect-w-1 aspect-h-1">
            <img 
                src={trend.src} 
                alt={trend.alt} 
                className="transform transition-transform duration-300 ease-in-out hover:scale-105 object-cover w-full h-full rounded-lg shadow-md" 
            />
            </div>
        ))}
        </div>
    </div>
  </div>
  )
}

export default Trends