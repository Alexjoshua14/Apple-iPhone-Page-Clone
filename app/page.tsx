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
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);

  useEffect(() => {
    setTimeout(() => {
      setSelectedColor(colorOptions[5]);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col h-full border-2 border-amber-500">
      <div>
        <TradeIn />
        <ColorSelect selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
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
