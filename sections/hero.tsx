'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { phoneImages } from '../constants/data';
import { ColorOption } from '../constants/data';

import { theme } from '@/tailwind.config.js';

interface HeroProps {
  selectedColor: ColorOption;
}

const isSmallScreen = () => {
  console.log(window.innerWidth)
  console.log(Number(theme.extend.screens.md.slice(0, -2)));
  return window.innerWidth < Number(theme.extend.screens.md.slice(0, -2));
}

const getMatrixValues = (selectedColor: ColorOption) => {
  const isSmall = isSmallScreen();
  console.log(isSmall);

  if (isSmall) {
    switch (selectedColor.color) {
      case "midnight":
        return "matrix(1.25307, 1.4415, -1.4415, 1.25307, 32, 336)";
      case "starlight":
        return "matrix(1.50809, 1.11067, -1.11067, 1.50809, -68.8576, 286.282)";
      case "red":
        return "matrix(1.64355, 0.777042, -0.777042, 1.64355, -188.666, 227.116)";
      case "blue":
        return "matrix(1.60505, 0.285641, -0.285641, 1.60505, -309.885, 171.609)";
      case "purple":
        return "matrix(1.34874, -0.184402, 0.184402, 1.34874, -427.251, 134.573)";
      case "yellow":
        return "matrix(1.03231, -0.459612, 0.459612, 1.03231, -528, 118.4)";
      default:
      case "none":
        return "matrix(0.76, 0, 0, 0.76, -320, 0)";
    }
  } else {
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
        return "matrix(1, 0, 0, 1, -320, 0)";
    }
  }
}

const Hero = ({ selectedColor }: HeroProps) => {

  const [isSmall, setIsSmall] = useState<boolean>(true);
  useEffect(() => {
    setIsSmall(isSmallScreen());
    window.addEventListener('resize', () => {
      setIsSmall(isSmallScreen());
    });
  }, []);

  return (
    <div className="h-[34rem] hero-gradient">
      <div className="flex justify-center items-center">
        <div className="px-4 py-2 text-[3.4rem] font-medium text-center md:text-start w-full max-w-[950px]">Wonderfull.</div>
      </div>
      <motion.div className={`hw-container`}
        initial={{
          transform: "matrix(0.76, 0, 0, 0.76, -320, 10)",
        }}
        animate={{
          transform: getMatrixValues(selectedColor),
        }}
        transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 1 }}
      >
        {phoneImages.map((image, index) => {
          const imageSet = isSmall ? image.imageSet.small : image.imageSet.medium;
          return (
            <motion.figure
              key={index}
              className={`absolute  ${image.color == selectedColor && ""}`}
              style={{
                backgroundImage: `url(${imageSet.url})`, backgroundRepeat: 'no-repeat',
                backgroundSize: `${imageSet.width}px ${imageSet.height}px`,
                width: imageSet.width, height: imageSet.height,
                top: imageSet.top, left: imageSet.left, transform: imageSet.matrix, transformOrigin: "0 0",
                maskImage: `url(${imageSet.maskURL})`, maskSize: `${imageSet.width}px ${imageSet.height}px`, maskRepeat: 'no-repeat',
              }}
            >
            </motion.figure>
          )

        })}
      </motion.div>
    </div>
  );
}

export default Hero;