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
  imageSet: {
    small: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/camera/camera_yellow__dzuyup0viniq_small.jpg",
      width: 390,
      height: 512,
    },
    medium: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/camera/camera_yellow__dzuyup0viniq_medium.jpg",
      width: 416,
      height: 467,
    },
    large: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/camera/camera_yellow__dzuyup0viniq_large.jpg",
      width: 590,
      height: 660,
    },
  },
  alt: "Selfie picture",
}

const card7Data = {
  lines: ["A15 Bionic chip.", "Fast that lasts."],
  imageSet: {
    small: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/chip/chip_yellow_startframe__dvond2jybf8m_small_2x.jpg",
      width: 390,
      height: 372
    },
    medium: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/chip/chip_yellow_endframe__b7ewc4s0trzm_medium.jpg",
      width: 262,
      height: 226
    },
    large: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/chip/chip_yellow_startframe__dvond2jybf8m_large.jpg",
      width: 370,
      height: 320
    },
  },
  alt: "Racing game",
}

const card9Data = {
  lines: ["Emergency SOS", "via satellite"],
  videoSet: {
    small: {
      url: "https://www.apple.com/105/media/us/iphone-14/2023/97f8aced-10f6-4f98-a722-2c87ef5b9ee6/anim/emergency-sos/small_2x.mp4",
      width: 390,
      height: 372
    },
    medium: {
      url: "https://www.apple.com/105/media/us/iphone-14/2023/97f8aced-10f6-4f98-a722-2c87ef5b9ee6/anim/emergency-sos/medium_2x.mp4",
      width: 416,
      height: 226,
    },
    large: {
      url: "https://www.apple.com/105/media/us/iphone-14/2023/97f8aced-10f6-4f98-a722-2c87ef5b9ee6/anim/emergency-sos/large_2x.mp4",
      width: 590,
      height: 320,
    }
  },
  alt: "Emergency SOS",
}

const card10Data = {
  imageSet: {
    small: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/crash-detection/crash_yellow__nzeqyx7jyeim_small_2x.jpg",
      width: 300,
      height: 282
    },
    medium: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/crash-detection/crash_yellow__nzeqyx7jyeim_medium_2x.jpg",
      width: 261,
      height: 226
    },
    large: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/crash-detection/crash_yellow__nzeqyx7jyeim_large_2x.jpg",
      width: 280,
      height: 230
    },
  },
  alt: "Crash Detection",
}

const card11Data = {
  header: "Personalization",
  lines: ["Your photo. Your font.", "Your widgets. Your iPhone."],
  imageSet: {
    small: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/ios16/ios16_yellow__fl7jo2364wuy_small_2x.jpg",
      width: 235,
      height: 340
    },
    medium: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/ios16/ios16_yellow__fl7jo2364wuy_medium_2x.jpg",
      width: 210,
      height: 305
    },
    large: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/ios16/ios16_yellow__fl7jo2364wuy_large_2x.jpg",
      width: 314,
      height: 458
    },
  },

  alt: "iPhone home screen with widgets",
  width: 210,
  height: 305
}

const card12Data = {
  lines: ["Sharper, smarter,", "snappier selfies."],
  imageSet: {
    small: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/true-depth/truedepth_yellow__gchqjrfxfxm6_small.jpg",
      width: 390,
      height: 537
    },
    medium: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/true-depth/truedepth_yellow__gchqjrfxfxm6_medium.jpg",
      width: 261,
      height: 467
    },
    large: {
      url: "https://www.apple.com/v/iphone-14/i/images/key-features/features/true-depth/truedepth_yellow__gchqjrfxfxm6_large.jpg",
      width: 370,
      height: 660
    },
  },
  alt: "iPhone home screen with widgets",

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
        <span className="border-2 rounded-xl px-2" style={{ borderColor: "var(--color-stop-1)" }}>looongest</span>
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
        viewport={{ once: true }}
        transition={{ ease: "linear", duration: .5, }}
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
        ref={ref}
      >
        <Image src={card6Data.imageSet.small.url}
          fill
          alt={card6Data.alt} className="md:hidden"
        />
        <Image src={card6Data.imageSet.medium.url}
          width={card6Data.imageSet.medium.width}
          height={card6Data.imageSet.medium.height}
          alt={card6Data.alt} className="hidden md:flex lg:hidden"
        />
        <Image src={card6Data.imageSet.large.url}
          width={card6Data.imageSet.large.width}
          height={card6Data.imageSet.large.height}
          alt={card6Data.alt} className="hidden lg:flex"
        />
      </div>
    </div>
  )
}

export const Card7 = () => {
  return (
    <div className="flex flex-end h-full w-full justify-center items-center relative">
      <div className="overlay">
        <div className="flex flex-col mb-[90px] md:mb-[36px] text-3xl md:text-lg leading-6 text-zinc-50 text-center">
          {card7Data.lines.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <Image src={card7Data.imageSet.small.url}
          fill
          alt={card7Data.alt} className="md:hidden"
        />
        <Image src={card7Data.imageSet.medium.url}
          width={card7Data.imageSet.medium.width}
          height={card7Data.imageSet.medium.height}
          alt={card7Data.alt} className="hidden md:flex lg:hidden"
        />
        <Image src={card7Data.imageSet.large.url}
          width={card7Data.imageSet.large.width}
          height={card7Data.imageSet.large.height}
          alt={card7Data.alt}
          className="hidden lg:flex"
        />
      </div>
    </div>
  )
}

export const Card8 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center text-center">
      <div>
        <span className="text-2xl md:text-lg lg:text-xl lg:font-medium echoTextGradient">Superspeedy</span>
      </div>
      <div className="flex h-1/2 w-full relative 
                      text-[9rem] md:text-[7rem] lg:text-[8rem] 
                      leading-[9rem] md:leading-[5.4rem] lg:leading-[rem] 
                      font-medium justify-center">
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
    <div ref={ref} className="flex relative flex-col h-full w-full justify-center items-center">
      {/* Note that documentation says autoplay="false" shoudn't work */}
      <div className="absolute flex justify-center items-center w-full h-full">
        <motion.div className="flex flex-col text-3xl font-medium text-zinc-50 text-center z-[3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: "linear", duration: 1, delay: .5 }}
        >
          {card9Data.lines.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </motion.div>
      </div>
      <div className="w-[420px] h-[420px] flex justify-center items-center md:hidden">
        <video muted playsInline autoPlay={isInView}
          height={card9Data.videoSet.small.height}
          width={card9Data.videoSet.small.width}
          src={card9Data.videoSet.small.url}
          className="md:hidden"
        />
      </div>
      <video muted playsInline autoPlay={isInView}
        height={card9Data.videoSet.medium.height}
        width={card9Data.videoSet.medium.width}
        src={card9Data.videoSet.medium.url}
        className="hidden md:flex lg:hidden"
      />
      <video muted playsInline autoPlay={isInView}
        height={card9Data.videoSet.large.height}
        width={card9Data.videoSet.large.width}
        src={card9Data.videoSet.large.url}
        className="hidden lg:flex"
      />
    </div>
  )
}

export const Card10 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <Image src={card10Data.imageSet.small.url}
        width={card10Data.imageSet.small.width}
        height={card10Data.imageSet.small.height}
        alt={card10Data.alt} className="md:hidden"
      />
      <Image src={card10Data.imageSet.medium.url}
        width={card10Data.imageSet.medium.width}
        height={card10Data.imageSet.medium.height}
        alt={card10Data.alt} className="hidden md:flex lg:hidden"
      />
      <Image src={card10Data.imageSet.large.url}
        width={card10Data.imageSet.large.width}
        height={card10Data.imageSet.large.height}
        alt={card10Data.alt}
        className="hidden lg:flex"
      />
    </div>
  )
}

export const Card11 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex-1 flex flex-col justify-center lg:justify-start lg:pt-14 items-center 
                        text-center text-3xl lg:text-4xl font-medium">
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
          transition={{ ease: "linear", duration: 1, }}
        >
          <Image src={card11Data.imageSet.small.url}
            width={card11Data.imageSet.small.width}
            height={card11Data.imageSet.small.height}
            alt={card11Data.alt} className="md:hidden"
          />
          <Image src={card11Data.imageSet.medium.url}
            width={card11Data.imageSet.medium.width}
            height={card11Data.imageSet.medium.height}
            alt={card11Data.alt} className="hidden md:flex lg:hidden"
          />
          <Image src={card11Data.imageSet.large.url}
            width={card11Data.imageSet.large.width}
            height={card11Data.imageSet.large.height}
            alt={card11Data.alt}
            className="hidden lg:flex"
          />
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
        ref={ref}
      >
        <div className={`w-[${card12Data.imageSet.small.width}px] h-[${card12Data.imageSet.small.height}px] flex justify-center items-center md:hidden`}>
          <Image src={card12Data.imageSet.small.url}

            alt={card12Data.alt} className="md:hidden"
            fill
          />
        </div>
        <Image src={card12Data.imageSet.medium.url}
          width={card12Data.imageSet.medium.width}
          height={card12Data.imageSet.medium.height}
          alt={card12Data.alt} className="hidden md:flex lg:hidden"
        />
        <Image src={card12Data.imageSet.large.url}
          width={card12Data.imageSet.large.width}
          height={card12Data.imageSet.large.height}
          alt={card12Data.alt}
          className="hidden lg:flex"
        />
      </div>
    </div >
  )
}

export const CardSet: React.FC[] = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Card10, Card11, Card12]