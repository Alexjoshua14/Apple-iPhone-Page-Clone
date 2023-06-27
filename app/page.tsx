import Image from 'next/image'

import TradeIn from '../sections/tradeIn';
import Hero from '../sections/hero';
import BuyNow from '../sections/buyNow';
import SpecGallery from '../sections/specGallery';
import Save from '../sections/save';
import Impact from '../sections/impact';
import CompareModels from '../sections/compareModels';
import ColorSelect from '../components/ColorSelect';


export default function Home() {
  return (
    <div className="flex flex-col h-full border-2 border-amber-500">
      <div>
        <TradeIn />
        <ColorSelect />
        <Hero />
        <BuyNow />
        <SpecGallery />
      </div>
      <Save />
      <Impact />
      <CompareModels />
    </div>
  )
}
