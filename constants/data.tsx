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