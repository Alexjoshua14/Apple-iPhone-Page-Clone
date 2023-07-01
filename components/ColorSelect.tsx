'use client'

import { useState } from 'react';
import { navOptions } from '../constants/data';
import { IconType } from 'react-icons';
import { ColorOption, colorOptions } from '../constants/data';

interface ColorSelectProps {
  selectedColor: ColorOption;
  setSelectedColor: (color: ColorOption) => void;
}

const ColorSelect = ({selectedColor, setSelectedColor}: ColorSelectProps ) => {
  return (
    <div className="flex justify-end items-center h-12 sticky top-[3.6rem] px-8 z-20
                    text-[.74rem] font-light text-zinc-800 
                    bg-white backdrop-filter backdrop-blur-lg bg-opacity-50
                    ">
      <div className="flex gap-2 items-center">
        <span className="px-2 text-[.95rem] font-medium">
          {
            selectedColor.base ?
              (
                <span className="tracking-tighter text-[.85rem] font-mono" 
                      style={{color: `var(--${selectedColor.color})`}}>
                  <span>
                    {selectedColor.base.toUpperCase()}
                  </span>
                  <sup className="text-[.6rem]">
                    {selectedColor.color.toUpperCase()}
                  </sup>
                </span>
              )
            :
             selectedColor.color.charAt(0).toUpperCase() + selectedColor.color.slice(1)
          }
        </span>
        
        {colorOptions.map((color, index) => {
          if (color.show) {
          return (
            <div key={index} 
                className={`p-[.7rem] rounded-full outline-[2.4px] border-2 border-white 
                            ${color === selectedColor ? "outline  outline-blue-500" : "cursor-pointer" }`} 
                            style={{backgroundColor: `var(--${color.color})`}}
                onClick={() => {selectedColor !== color && setSelectedColor(color)}}
              >
              
            </ div>
            )
          }
      })}
      </div>
    </div>
  );
};

export default ColorSelect;