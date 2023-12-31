'use client'

import React from "react";
import { CardSet } from "../components/cards";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { ColorOption, colorOptions } from '../constants/data';

interface SpecGalleryProps {
  selectedColor: ColorOption;
}

const CardContainer = (Item: React.FC, selectedColor: ColorOption, index: number) => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: index == 0 ? ["start end", "center end"] : ["center end", "end end"]
  });

  return (
    <motion.div
      ref={ref}
      key={index}
      className={`grid-item-${index} md:h-full rounded-[1.5rem] bg-zinc-100 relative overflow-hidden`}
      style={{ opacity: scrollYProgress }}
    >
      <Item />
      <motion.div
        className="absolute bottom-0 right-0 p-[7px] m-[15px] flex justify-center items-center rounded-full"
        style={{ background: `${selectedColor.hex}` }}
        initial={{ opacity: .5, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "linear", duration: .5, }}
      >
        <FaChevronRight size={18} />
      </motion.div>
    </motion.div>
  )
}

const SpecGallery = ({ selectedColor }: SpecGalleryProps) => {

  return (
    <div className="flex justify-center h-max md:h-[1959px] lg:h-[170rem] py-10">
      <div className="flex flex-col h-full justify-center overflow-hidden
                      min-w-[321px] w-[90%] max-w-[390px]
                      md:w-[692px] md:grid grid-cols-5 grid-rows-8 gap-6 md:gap-[15px] md:max-w-[950px]
                      lg:w-[950px]
      ">
        {CardSet.map((Item: React.FC, index) => (
          CardContainer(Item, selectedColor, index)
        ))}
      </div>
    </div>
  );
}

export default SpecGallery;

{/* <motion.div
              key={index}
              className={`grid-item-${index} md:h-full rounded-[1.5rem] bg-zinc-100 overflow-hidden opacity-[${opacity}%]`}
              // initial={{opacity: 0}}
              // whileInView={{opacity: 1}}
              // transition={{ease: "linear", duration: 1}}
            >
              {item}
            </motion.div> */}