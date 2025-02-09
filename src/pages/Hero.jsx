import React, { useEffect, useRef, useState } from 'react'
import image1 from "../assets/image1.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

const Hero = () => {
  const [index, setIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <main className='hero-container' >
      <img src={image1} style={{display:`${index == 0 ? 'block' : 'none'}`}} className='fade' alt="" srcset="" />
      <img src={image3} style={{display:`${index == 1 ? 'block' : 'none'}`}} className='fade' alt="" srcset="" />
      <img src={image4} style={{display:`${index == 2 ? 'block' : 'none'}`}} className='fade' alt="" srcset="" />
      <img src={image5} style={{display:`${index == 3 ? 'block' : 'none'}`}} className='fade' alt="" srcset="" />
    </main>
    </section>
  )
}

export default Hero