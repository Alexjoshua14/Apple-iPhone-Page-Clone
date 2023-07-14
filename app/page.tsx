'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

import TradeIn from '../sections/tradeIn';
import Hero from '../sections/hero';
import BuyNow from '../sections/buyNow';
import SpecGallery from '../sections/specGallery';
import Save from '../sections/save';
import Impact from '../sections/impact';
import CompareModels from '../sections/compareModels';

import ColorSelect from '../components/ColorSelect';

import { ColorOption, colorOptions } from '../constants/data';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[6]);
  const [animationEnded, setAnimationEnded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setSelectedColor(colorOptions[5]);
      setAnimationEnded(true);
    }, 2000);
  }, []);

  const handleColorSelection = (color: ColorOption) => {
    if (!animationEnded) {
      return;
    }

    setSelectedColor(color);
  }

  return (
    <div className="flex flex-col h-full">
      <div>
        <TradeIn />
        <ColorSelect selectedColor={selectedColor} setSelectedColor={handleColorSelection} />
        <Hero selectedColor={selectedColor} />
        <BuyNow />
        <SpecGallery selectedColor={selectedColor} />
      </div>
      <Save />
      <Impact />
      <CompareModels />
    </div>
  )
}
