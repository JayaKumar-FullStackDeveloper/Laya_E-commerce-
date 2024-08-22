import React, { useState, useEffect, useRef } from 'react';

const content = [
  { text: "Discover our exclusive Hair Products", link: "/hair-products" },
  { text: "Explore our range of Skin Care", link: "/skin-products" },
  { text: "Get the best deals on Hair Care", link: "/hair-products" },
  { text: "Check out our Skin Care Offers", link: "/skin-products" },
  { text: "Special Discounts on Hair Products", link: "/hair-products" }
];

const videos = [
  "https://videos.pexels.com/video-files/9582013/9582013-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/7428177/7428177-uhd_2732_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/7852799/7852799-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/8128402/8128402-uhd_2732_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/7852596/7852596-hd_1920_1080_30fps.mp4",
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
    };

    timeoutRef.current = setTimeout(nextSlide, 7000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    const handleVideoEnded = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('ended', handleVideoEnded);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, [currentVideoIndex]);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.load();
    videoElement.play().catch(error => {
      console.error('Error trying to play the video:', error);
    });
  }, [currentVideoIndex]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? content.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === content.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', cursor: 'none' }}
        muted
        playsInline
        autoPlay
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl mb-4">{content[currentIndex].text}</h2>
          <a
            href={content[currentIndex].link}
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-20 top-1/2 text-white font-semibold text-7xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-20 top-1/2 text-white font-semibold text-7xl"
      >
        ›
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center mb-4">
        {content.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
