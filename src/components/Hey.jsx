import React from 'react'
import ReactFastMarquee from "react-fast-marquee";

const Marquee = ReactFastMarquee?.default || ReactFastMarquee;

const Hey = () => {
  return (
    <Marquee
      speed={80}
      direction="right"
      gradient={false}
      loop={3}
      className
    >
      
    <img className="h-40 w-35 mr-2" src="download.jfif" alt="" srcset="" />
    <img className="h-40 w-35 mr-2" src="suju.jpg" alt="" srcset="" />
    <img className="h-40 w-35 mr-2"src="sandik.jpg" alt="" srcset="" />
    </Marquee>
  )
}

export default Hey
