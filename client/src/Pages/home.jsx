import React from 'react'
import Carousel from '../Components/Carousel'
import Trends from '../Components/Trends'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
export function Homepage() {
  return (
    <>
    <div style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
    <Carousel/>
    <Trends/>
    <Newsletter/>
    <Footer/>
    </div>
    </>
  )
}
 
