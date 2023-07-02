'use client'

import { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { phoneImages } from '../constants/data';
import { ColorOption } from '../constants/data';

interface HeroProps {
  selectedColor: ColorOption;
}

const getMatrixValues = (selectedColor: ColorOption) => {
  // Noting that this is NOT a clean way to do this but temporary fix
  if (selectedColor.show === false) return "matrix(1, 0, 0, 1, -320, 0)";

  switch (selectedColor.color) {
    case "midnight":
      return "matrix(1.23834, 1.41454, -1.41454, 1.23834, -128.405, 332.59)";
    case "starlight":
      return "matrix(1.48785, 1.08915, -1.08915, 1.48785, -206.361, 277.221)";
    case "red":
      return "matrix(1.62036, 0.76141, -0.76141, 1.62036, -300.387, 205.514)";
    case "blue":
      return "matrix(1.5883, 0.295853, -0.295853, 1.5883, -395.727, 134.274)";
    case "purple":
      return "matrix(1.33282, -0.183277, 0.183277, 1.33282, -492.59, 94.64)";
    case "yellow":
      return "matrix(1.02317, -0.455545, 0.455545, 1.02317, -572.56, 88.41)";
    default:
    case "none":
      return "matrix(1.02317, -0.455545, 0.455545, 1.02317, -572.56, 88.41)";

  }
}

const Hero = ({ selectedColor }: HeroProps) => {

  let i = 0;

  return (
    <div className="h-[34rem] hero-gradient">
      <div className="px-4 py-2 text-[3.4rem] font-medium">Wonderfull.</div>
      
      <motion.div className={`hw-container`}
        initial={{
          transform: "matrix(0.76, 0, 0, 0.76, -320, 10)",
        }}
        animate={{
          transform: getMatrixValues(selectedColor),
        }}
        transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 1 }}
      >
        {phoneImages.map((image, index) => (
            <motion.figure 
              key={index}
              className={`absolute ${image.color == selectedColor && " scale-125"}`}
              style={{
                backgroundImage: `url(${image.imageURL})`, backgroundSize: `${image.width}px ${image.height}px`, backgroundRepeat: 'no-repeat',
                width: image.width, height: image.height,
                top: image.top, left: image.left, transform: image.matrix, transformOrigin: "0 0",
                maskImage: `url(${image.maskURL})`, maskSize: `${image.width}px ${image.height}px`, maskRepeat: 'no-repeat',
              }}
            >
            </motion.figure>
          
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;