import { IconType } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { PiCaretDownThin } from "react-icons/pi";

export interface ColorOption {
  color: string,
  base?: string,
  hex: string
}

export interface CardData { 
  icon?: string,
  iconAlt?: string,
  title: string,
  desc?: string,
  linkText: string,
  link: string,
  imgURL: string,
  alt: string,
  width: number,
  height: number,
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

export const appleIcon = {
  name: 'Home',
  icon: AiFillApple,
  size: 22
}

export const downArrow = {
  name: 'Down Arrow',
  icon: PiCaretDownThin,
  size: 25
}
  
export const smallNavOptions: {name: string, icon: IconType, size: number}[] = [
  {
    name: 'Search',
    icon: AiOutlineSearch,
    size: 20
  },
  {
    name: 'Bag',
    icon: BsBag,
    size: 17
  },
  {
    name: 'Menu',
    icon: HiOutlineMenuAlt4,
    size: 19
  },
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

export const savingsData: CardData[] = [
  {
    title: "Get $200–$630 in credit toward iPhone 14 when you trade in iPhone 11 or higher.",
    desc: "",
    linkText: "See what your device is worth",
    link: "https://www.apple.com/us/shop/goto/trade_in",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/trade_in__ddpb48zprkya_medium_2x.jpg",
    alt: "Device trade in",
    width: 400,
    height: 200
  },
  {
    title: "Save up to $800 on iPhone 14 with carrier deals at Apple.",
    desc: "",
    linkText: "See iPhone deals",
    link: "https://www.apple.com/us/shop/goto/buy_iphone/carrier_offers",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/trade_in__ddpb48zprkya_medium_2x.jpg",
    alt: "Carrier deals",
    width: 400,
    height: 200
  },
  { 
    title: "Pay 0% APR over 24 months with Apple Card.",
    desc: "Choose Apple Card Monthly Installments when you check out.",
    linkText: "Learn more",
    link: "https://www.apple.com/apple-card/monthly-installments/",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/apple_card__ewustuxm1ziq_large_2x.jpg",
    alt: "Apple Card",
    width: 200,
    height: 100
  },
]

export const impactData: CardData[] = [
  {
    icon: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/icon_environment__c6uj2lv9q9ci_large_2x.png",
    iconAlt: "Sustainable Apple icon",
    title: "Recycling, reimagined.",
    desc: "",
    linkText: "See how iPhone reuses materials to conserve resources",
    link: "https://www.apple.com/environment/",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/environment__26l1ur8e2wy2_large_2x.jpg",
    alt: "Sketch of Earth",
    width: 150,
    height: 150
  },
  {
    icon: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/icon_privacy__bnq8lcu8gsoi_large_2x.png",
    iconAlt: "Privacy Apple icon",
    title: "Privacy. That's iPhone.",
    desc: "",
    linkText: "Check out the latest privacy features for iPhone",
    link: "https://www.apple.com/privacy/",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/privacy__b63b9akq4zma_large_2x.jpg",
    alt: "iPhone privacy in action",
    width: 320,
    height: 300
  },
  {
    icon: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/icon_accessibility__fiow2fk4hziq_large_2x.png",
    iconAlt: "Accessibility icon",
    title: "iPhone for all.",
    desc: "",
    linkText: "Discover helpful accessibility features like VoiceOver",
    link: "https://www.apple.com/accessibility/",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/endcap/accessibility__chjiilbtptjm_large_2x.jpg",
    alt: "Voice over example",
    width: 270,
    height: 100
  },
]