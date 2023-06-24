'use client'

import { useState } from 'react';
import Image from 'next/image';

import { phoneImages } from '../constants/data';

const Hero = () => {
  const [selectedColor, setSelectedColor] = useState("yellow");

  return (
    <div className="h-[34rem] hero-gradient">
      <div className="px-4 py-2 text-[3.4rem] font-medium">Wonderfull.</div>
      <div className="flex">
        {phoneImages.map((image, index) => (
          <div className="h-15 w-15">
            <Image 
              src={image.imageURL} 
              height={image.color === selectedColor ? 150 : 100} width={image.color === selectedColor ? 150 : 100} 
              alt="iPhone" key={index}
              style={{transform: image.color === selectedColor ? "none" : image.matrix}}
              
              />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;