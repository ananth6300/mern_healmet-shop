import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import ImageCarousel from './ImageCarousel';
import Gridd from './Gridd';

export default function Home() {
  return (
    <div className='hp'>
      <marquee><h1>Welcome to the Rider's Helmet Shop!!</h1></marquee>
      <h3>RIDE SAFE 🪖 WEAR A HELMET</h3>
      <ImageCarousel />
      <Gridd/>
      
      <div className='intro'>
        <div className='box box1'>
          <div className='he'>
            <h1>Helmetwala.com: Your One-Stop Shop for Full Face Helmets Online</h1>
          </div>
          <p className='pp'>
            Are you ready to ride with style and safety? Then you need a Full Face Helmets from Helmetwala.com.
            Our collection features top-notch Full Face Helmets from leading brands, including AXOR, MT Helmets,
            Studds, and more. Experience the ultimate protection and comfort with our premium selection. They feature
            visors, ventilation systems, stylish designs, and various sizes to fit your preference. No matter what kind
            of ride you are planning, you can find the perfect helmet at Helmetwala.com. Don't compromise on safety or style
            when it comes to your motorcycle helmet. Choose HelmetWala.com for the perfect blend of quality, affordability,
            and trendy designs. Visit us now and gear up with the best Full Face Helmets available!
            Buy Full Face Helmets brands in India including MT, Axor Helmets, Axxiss, Scala, and more. Top quality helmets
            with full face protection visors made with the best material for your safety and designed for your style and comfort.
          </p>
        </div>
        <div className='box box2'>
          <img src='head.webp' alt="Helmet" />
        </div>
      </div>
    </div>
  );
}
