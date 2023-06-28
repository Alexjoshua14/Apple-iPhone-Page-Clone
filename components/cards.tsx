'use client'

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from 'next/image';

const card1Data = {
  header: "Big and bigger.",
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/size/size_yellow__dnv9794q7loy_medium.jpg",
  width: 229,
  height: 339,
  alt: "iPhone 14 and iPhone 14 Plus",
  description: [
    {
      header: "iPhone 14",
      description: "6.1\"",
    }, {
      header: "iPhone 14 Plus",
      description: "6.7\"",
    }
  ]
}

const card3Data = {
  header: "Ceramic Shield",
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/ceramic-shield/ceramic_shield_yellow__cswxzzxcyiqa_medium.jpg",
  width: 301,
  height: 188,
  alt: "Ceramic Shield",
  description: "Tougher than any smartphone glass.",
}

const card5Data = {
  header: "Action mode",
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/action-mode/action_mode_hw__exba95gt7jma_medium.png",
  width: 296,
  height: 132,
  alt: "Action mode",
  description: "Shaky shots, stable video.",
}

const card6Data = {
  lines: ["More detailed details.", "More colorful colors.", "More epic pics."],
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/camera/camera_yellow__dzuyup0viniq_medium.jpg",
  alt: "Selfie picture",
  width: 416,
  height: 467
}


export const Card1 = () => {
  return (
    <div className="flex flex-col h-full w-full text-center py-3">
      <div className="flex-1 flex items-center justify-center">
        <span className="text-3xl">{card1Data.header}</span>
      </div>
      <div className="h-max flex justify-center items-center max-w-full max-h-full">
        <Image src={card1Data.image} width={card1Data.width} height={card1Data.height} alt={card1Data.alt} />
      </div>
      <div className="flex-1 flex justify-center items-center gap-8">
        {card1Data.description.map((item, index) => (
          <div key={index} className="h-full flex flex-col justify-center items-center">
            <span className="text-lg text-zinc-500">{item.header}</span>
            <span className="text-3xl">{item.description}</span>
          </div>  
        ))}
      </div>
    </div>
  )
}

export const Card2 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center p-14 md:p-2">
      <div className="flex items-center justify-center">
        <span className="text-lg text-zinc-400">iPhone 14 Plus</span>
      </div>
      <div className="text-3xl lg:text-4xl text-center p-2 bg-clip-text font-bold gradientBackground">
        <span>The </span>
        <span className="border-2 rounded-xl px-2" style={{borderColor: "var(--color-stop-1)"}}>looongest</span>
        <span> battery life of any iPhone. Ever.</span>
      </div>
    </div>
  )
}

export const Card3 = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <motion.div className="h-1/3"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: -25 }}
        viewport={{ once: true}}
        transition={{ ease: "linear", duration: .5,}}
      >
        <Image src={card3Data.image} width={card3Data.width} height={card3Data.height} alt={card3Data.alt} />
      </motion.div>
      <div className="flex-1 flex flex-col text-center items-center justify-center px-4 lg:px-20 pt-0">
        <span className="text-xl text-zinc-400">{card3Data.header}</span>
        <span className="text-lg lg:text-2xl font-medium">{card3Data.description}</span>
      </div>
    </div>
  )
}

export const Card4 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const Card5 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-lg text-zinc-400">{card5Data.header}</span>
        <span className="text-lg lg:text-2xl font-medium">{card5Data.description}</span>
      </div>
      <div>
        <Image src={card5Data.image} width={card5Data.width} height={card5Data.height} alt={card5Data.alt} />
      </div>
    </div>
  )
}

export const Card6 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: .6 });

  return (
    <div className="flex flex-end h-full w-full justify-center items-center relative">
      <div className="overlay">
        <div className="flex flex-col mb-[36px] text-3xl leading-8 text-zinc-50 text-center">
          {card6Data.lines.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div
        style={{ 
          transform: isInView ? "none" : "scale(1.2)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.75s ease", 
        }}
      >
        <Image src={card6Data.image} width={card6Data.width} height={card6Data.height} alt={card6Data.alt} ref={ref} />
      </div>
    </div>
  )
}

export const Card7 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const Card8 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const Card9 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const Card10 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const Card11 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const Card12 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const CardSet: React.FC[] = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Card10, Card11, Card12]