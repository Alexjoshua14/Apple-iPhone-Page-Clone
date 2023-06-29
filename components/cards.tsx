'use client'

import React, { useRef, useEffect } from "react";
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

const card7Data = {
  lines: ["A15 Bionic chip.", "Fast that lasts."],
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/chip/chip_yellow_endframe__b7ewc4s0trzm_medium.jpg",
  alt: "Racing game",
  width: 262,
  height: 226
}

const card9Data = {
  lines: ["Emergency SOS", "via satellite"],
  videoLink: "https://www.apple.com/105/media/us/iphone-14/2023/97f8aced-10f6-4f98-a722-2c87ef5b9ee6/anim/emergency-sos/medium_2x.mp4",
  alt: "Emergency SOS",
  width: 416,
  height: 226,
}

const card10Data = {
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/crash-detection/crash_yellow__nzeqyx7jyeim_medium_2x.jpg",
  alt: "Crash Detection",
  width: 261,
  height: 226
}

const card11Data = {
  header: "Personalization",
  lines: ["Your photo. Your font.", "Your widgets. Your iPhone."],
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/ios16/ios16_yellow__fl7jo2364wuy_medium_2x.jpg",
  alt: "iPhone home screen with widgets",
  width: 210,
  height: 305
}

const card12Data = {
  lines: ["Sharper, smarter,", "snappier selfies."],
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/true-depth/truedepth_yellow__gchqjrfxfxm6_medium.jpg",
  alt: "iPhone home screen with widgets",
  width: 261,
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
    <div className="flex flex-col h-full w-full py-16 md:py-8 lg:py-16 justify-around items-center text-center">
      <div className="gradientBackground">
        <span className="text-6xl md:text-5xl lg:text-6xl font-medium">Water resistance.</span>
      </div>
      <div>
        <span className="text-2xl md:text-lg lg:text-2xl font-medium">(Phew.)</span>
      </div>
    </div>
  )
}

export const Card5 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-between items-center">
      <div className="flex flex-col justify-center items-center text-center pt-[5.5rem] md:pt-6">
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
        className="h-full w-full"
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
    <div className="flex flex-end h-full w-full justify-center items-center relative">
      <div className="overlay">
        <div className="flex flex-col mb-[36px] text-lg leading-6 text-zinc-50 text-center">
          {card7Data.lines.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <Image src={card7Data.image} width={card7Data.width} height={card7Data.height} alt={card7Data.alt} />
      </div>
    </div>
  )
}

export const Card8 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center text-center">
      <div>
        <span className="text-lg echoTextGradient">Superspeedy</span>
      </div>
      <div className="flex h-1/2 w-full relative text-[7rem] leading-[5.4rem] font-medium justify-center">
        <div className="absolute top-0 w-[54%] flex justify-center px-[.4rem] pb-4 z-[5] echoText">
          <span className="echoTextGradient">5</span>
          <span className="echoTextGradient">G</span>
        </div>
        <div className="absolute top-0 w-[72%] flex justify-between px-[.4rem] pb-4 z-[4] echoText">
          <span className="echoTextGradient">5</span>
          <span className="echoTextGradient">G</span>
        </div>
        <div className="absolute top-0 w-[88%] flex justify-between px-[.4rem] pb-4 z-[3] echoText">
          <span className="echoTextGradient">5</span>
          <span className="echoTextGradient">G</span>
        </div>
        <div className="absolute top-0 w-[102%] flex justify-between px-[.4rem] pb-4 z-[2] echoText">
          <span className="echoTextGradient">5</span>
          <span className="echoTextGradient">G</span>
        </div>
      </div>
    </div>
  )
}

export const Card9 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: .8 });
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col h-full w-full">
      {/* Note that documentation says autoplay="false" shoudn't work */}
      <div className="absolute flex justify-center items-center w-full h-full">
        <motion.div className="flex flex-col text-3xl font-medium text-zinc-50 text-center"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true}}
          transition={{ ease: "linear", duration: 1, delay: .5}}
        >
          {card9Data.lines.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </motion.div>
      </div>
      <video muted playsInline autoPlay={isInView} height={card9Data.height} width={card9Data.width} src={card9Data.videoLink} />
    </div>
  )
}

export const Card10 = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Image src={card10Data.image} width={card10Data.width} height={card10Data.height} alt={card10Data.alt} />
    </div>
  )
}

export const Card11 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex-1 flex flex-col justify-center items-center text-center text-3xl font-medium">
        <span className="text-lg text-zinc-500">
          {card11Data.header}
        </span>
        {card11Data.lines.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .7 }}
          transition={{ ease: "linear", duration: 1,}}
        >
          <Image src={card11Data.image} width={card11Data.width} height={card11Data.height} alt={card11Data.alt} />
        </motion.div>
      </div>
    </div>
  )
}

export const Card12 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: .6 });

  return (
    <div className="flex flex-end h-full w-full justify-center items-center relative">
      <div className="overlay">
        <div className="flex flex-col mb-[64px] text-3xl leading-8 text-zinc-50 text-center">
          {card12Data.lines.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div
        className="flex justify-center items-center h-full w-full"
        style={{ 
          transform: isInView ? "none" : "scale(1.2)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.75s ease", 
        }}
      >
        <Image src={card12Data.image} width={card12Data.width} height={card12Data.height} alt={card12Data.alt} ref={ref} />
      </div>
    </div>
  )
}

export const CardSet: React.FC[] = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Card10, Card11, Card12]