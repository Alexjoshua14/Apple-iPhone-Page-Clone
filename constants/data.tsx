import { IconType } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

export interface ColorOption {
  color: string,
  base?: string,
  hex: string
}

export const navOptions: { name: string, icon?: IconType, size?: number }[] = [
  {
    name: 'Home',
    icon: AiFillApple,
    size: 19
  },
  {
    name: 'Store',
  },
  {
    name: 'Mac',
  },
  {
    name: 'iPad',
  },
  {
    name: 'iPhone',
  },
  {
    name: 'Watch',
  },
  {
    name: 'Vision',
  },
  {
    name: 'AirPods',
  },
  {
    name: 'TV & Home',
  },
  {
    name: 'Entertainment',
  },
  {
    name: 'Accessories',
  },
  {
    name: 'Support',
  },
  {
    name: 'Search',
    icon: AiOutlineSearch,
    size: 18
  },
  {
    name: 'Bag',
    icon: BsBag,
    size: 14
  }
]

export const colorOptions: {color: string, base?: string, hex: string}[] = [
  { color: 'midnight', hex: '#31353A' },
  { color: 'starlight', hex: '#F0ECE8' },
  { color: 'red', base: '(product)', hex: '#E11C2A' },
  { color: 'blue', hex: '#C0CFDE' },
  { color: 'purple', hex: '#E7D7E9' },
  { color: 'yellow', hex: '#F5E488' },
]

export const phoneImages: {color: string, imageURL: string, matrix: string}[] = [
  { color: 'midnight', 
    imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_midnight__sg7l40u32uim_medium.jpg',
    matrix: 'matrix(0.52, 0, 0, 0.52, 0, 0)'
  },
  { color: 'starlight', 
  imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_starlight__fnug85nckkuq_medium.jpg',
  matrix: 'matrix(0.535, 0, 0, 0.535, 0, 0)'
  },
  { color: 'red', 
  imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_red__z83xubxufc2i_medium.jpg',
  matrix: 'matrix(0.54, 0, 0, 0.54, 0, 0)'
  },
  { color: 'blue', 
  imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_blue__n9fnkto95n2q_medium.jpg',
  matrix: 'matrix(0.58, 0, 0, 0.58, 0, 0)'
  },
  { color: 'purple', 
  imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_purple__bs5nrbl1uw3m_medium.jpg',
  matrix: 'matrix(0.68, 0, 0, 0.68, 0, 0)'
  },
  { color: 'yellow', 
  imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_yellow__d3aifvttsuuu_medium.jpg',
  matrix: 'matrix(0.87, 0, 0, 0.87, 0, 0)'
  },
]