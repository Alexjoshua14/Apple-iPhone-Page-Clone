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
  show: boolean
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

export const colorOptions: {color: string, base?: string, hex: string, show: boolean}[] = [
  { color: 'midnight', hex: '#31353A', show: true },
  { color: 'starlight', hex: '#F0ECE8', show: true },
  { color: 'red', base: '(product)', hex: '#E11C2A', show: true },
  { color: 'blue', hex: '#C0CFDE', show: true },
  { color: 'purple', hex: '#E7D7E9', show: true },
  { color: 'yellow', hex: '#F5E488', show: true },
  { color: 'none', hex: '#F5E488', show: false }, // duplicate for animation
]

export const phoneImages: {color: ColorOption, imageURL: string, maskURL: string, width: number, height: number, matrix: string, top: number, left: number}[] = [
  { 
    color: colorOptions[0], 
    imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_midnight__sg7l40u32uim_medium.jpg',
    maskURL: '/images/hero_midnight_mask_medium.png',
    width: 346,
    height: 366,
    matrix: 'matrix(0.52, 0, 0, 0.52, 0, 0)',
    left: 0,
    top: 177,
  },
  { 
    color: colorOptions[1], 
    imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_starlight__fnug85nckkuq_medium.jpg',
    maskURL: '/images/hero_starlight_mask_medium.png',
    width: 338,
    height: 380,
    matrix: 'matrix(0.535, 0, 0, 0.535, 0, 0)',
    left: 66,
    top: 100,
  },
  { 
    color: colorOptions[2], 
    imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_red__z83xubxufc2i_medium.jpg',
    maskURL: '/images/hero_red_mask_medium.png',
    width: 294,
    height: 370,
    matrix: 'matrix(0.54, 0, 0, 0.54, 0, 0)',
    left: 166,
    top: 57,
  },
  { 
    color: colorOptions[3], 
    imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_blue__n9fnkto95n2q_medium.jpg',
    maskURL: '/images/hero_blue_mask_medium.png',
    width: 240,
    height: 376,
    matrix: 'matrix(0.58, 0, 0, 0.58, 0, 0)',
    left: 283,
    top: 38,
  },
  { 
    color: colorOptions[4], 
    imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_purple__bs5nrbl1uw3m_medium.jpg',
    maskURL: '/images/hero_purple_mask_medium.png',
    width: 218,
    height: 404,
    matrix: 'matrix(0.68, 0, 0, 0.68, 0, 0)',
    left: 408,
    top: 35,
  },
  { 
    color: colorOptions[5], 
    imageURL: 'https://www.apple.com/v/iphone-14/i/images/key-features/hero/hero_yellow__d3aifvttsuuu_medium.jpg',
    maskURL: '/images/hero_yellow_mask_medium.png',
    width: 280,
    height: 402,
    matrix: 'matrix(0.87, 0, 0, 0.87, 0, 0)',
    left: 511,
    top: 72,
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

export interface SpecData {
  image: string,
  alt: string,
  title: string[],
  lines?: string[]
}

export interface SpecsList {
  island?: SpecData,
  sos?: SpecData,
  camera?: SpecData,
  video?: SpecData,
  battery?: SpecData,
  chip?: SpecData,
  security?: SpecData,
  wireless?: SpecData,
}

export interface PhoneModel {
  name: string,
  description: string,
  price: string,
  imgURL: string,
  screenSize: string,
  display: string[],
  specs: SpecsList
}

export const phoneModels: PhoneModel[] = [
  {
    name: "iPhone 14 Pro",
    description: "The ultimate iPhone.",
    price: "From $999",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/compare_iphone_14_pro__b64qzo6a0x2a_medium_2x.jpg",
    screenSize: `6.7" or 6.1"`,
    display: ["Super Retina XDR display", "ProMotion technology", "Always-On display"],
    specs: {
      island: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_dynamic_island__ecytebrz5kcy_large_2x.png",
        alt: "Dynamic Island",
        title: ["Dynamic Island"],
        lines: ["A new way to interact with iPhone"],
      },
      sos: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_sos__zyck5g9sioia_large_2x.png",
        alt: "SOS",
        title: ["Emergency SOS via satellite", "Emergency SOS", "Crash Detection"],
      },
      camera: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_14_pro_camera__cw1nfa8yehea_large_2x.png",
        alt: "iPhone 14 Pro Camera",
        title: ["Pro camera system"],
        lines: ["48MP Main | Ultra Wide", "Telephoto", "Photonic Engine for incredible detail and color", "Autofocus on TrueDepth front camera"],
      },
      video: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_action_mode__cyrlupvb4ec2_large_2x.png",
        alt: "Action Mode",
        title: ["Action mode smooths out shaky handheld videos"],
      },
      battery: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_battery__ei6dw1lk8hci_large_2x.png",
        alt: "Battery",
        title: ["Up to 29 hours video playback"],
      },
      chip: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_a16__fhuowbbsqui6_large_2x.png",
        alt: "A16 Bionic",
        title: ["A16 Bionic chip"],
      },
      security: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_face_id__ew6nmx8j856q_large_2x.png",
        alt: "Face ID",
        title: ["Face ID"],
      },
      wireless: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_5g__fgjhjnonk5u2_large_2x.png",
        alt: "5G",
        title: ["Superfast 5G cellular"],
      }
    }
  },
  {
    name: "iPhone 14",
    description: "A total powerhouse.",
    price: "From $799",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/compare_iphone_14_pro__b64qzo6a0x2a_medium_2x.jpg",
    screenSize: `6.7" or 6.1"`,
    display: ["Super Retina XDR display", "—", "—"],
    specs: {
      island: undefined,
      sos: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_sos__zyck5g9sioia_large_2x.png",
        alt: "SOS",
        title: ["Emergency SOS via satellite", "Emergency SOS", "Crash Detection"],
      },
      camera: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_14_camera__djj4jqovo4wi_large_2x.png",
        alt: "iPhone 14 Camera",
        title: ["Advanced dual-camera system"],
        lines: ["12MP Main | Ultra Wide", "—", "Photonic Engine for incredible detail and color", "Autofocus on TrueDepth front camera"],
      },
      video: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_action_mode__cyrlupvb4ec2_large_2x.png",
        alt: "Action Mode",
        title: ["Action mode smooths out shaky handheld videos"],
      },
      battery: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_battery__ei6dw1lk8hci_large_2x.png",
        alt: "Battery",
        title: ["Up to 26 hours video playback"],
      },
      chip: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_a15__ghdmbc6sdfu6_large_2x.png",
        alt: "A15 Bionic",
        title: ["A15 Bionic chip with 5-core GPU"],
      },
      security: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_face_id__ew6nmx8j856q_large_2x.png",
        alt: "Face ID",
        title: ["Face ID"],
      },
      wireless: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_5g__fgjhjnonk5u2_large_2x.png",
        alt: "5G",
        title: ["Superfast 5G cellular"],
      }
    }
  },
  {
    name: "iPhone 13",
    description: "As amazing as ever.",
    price: "From $599",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/compare_iphone_14_pro__b64qzo6a0x2a_medium_2x.jpg",
    screenSize: `6.1" or 5.4"`,
    display: ["Super Retina XDR display", "—", "—"],
    specs: {
      island: undefined,
      sos: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_sos__zyck5g9sioia_large_2x.png",
        alt: "SOS",
        title: ["—", "Emergency SOS", "—"],
      },
      camera: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_14_camera__djj4jqovo4wi_large_2x.png",
        alt: "iPhone 13 Camera",
        title: ["Dual-camera system"],
        lines: ["12MP Main | Ultra Wide", "—", "—", "Autofocus on TrueDepth front camera"],
      },
      video: undefined,
      battery: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_battery__ei6dw1lk8hci_large_2x.png",
        alt: "Battery",
        title: ["Up to 19 hours video playback"],
      },
      chip: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_a15__ghdmbc6sdfu6_large_2x.png",
        alt: "A15 Bionic",
        title: ["A15 Bionic chip with 4-core GPU"],
      },
      security: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_face_id__ew6nmx8j856q_large_2x.png",
        alt: "Face ID",
        title: ["Face ID"],
      },
      wireless: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_5g__fgjhjnonk5u2_large_2x.png",
        alt: "5G",
        title: ["Superfast 5G cellular"],
      }
    }
  },
  {
    name: "iPhone SE",
    description: "Serious power. Serious value.",
    price: "From $429",
    imgURL: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/compare_iphone_14_pro__b64qzo6a0x2a_medium_2x.jpg",
    screenSize: `4.7"`,
    display: ["Retina HD display", "—", "—"],
    specs: {
      island: undefined,
      sos: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_sos__zyck5g9sioia_large_2x.png",
        alt: "SOS",
        title: ["—", "Emergency SOS", "—"],
      },
      camera: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_se_camera__brceyjt23nyq_large_2x.png",
        alt: "iPhone SE Camera",
        title: ["Prop camera system"],
        lines: ["12MP Main", "—", "—", "Front camera"],
      },
      video: undefined,
      battery: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_battery__ei6dw1lk8hci_large_2x.png",
        alt: "Battery",
        title: ["Up to 15 hours video playback"],
      },
      chip: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_a15__ghdmbc6sdfu6_large_2x.png",
        alt: "A15 Bionic",
        title: ["A15 Bionic chip with 4-core GPU"],
      },
      security: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_touch_id__dhhz5txseloy_large_2x.png",
        alt: "Touch ID",
        title: ["Touch ID"],
      },
      wireless: {
        image: "https://www.apple.com/v/iphone-14/i/images/key-features/compare/icon_5g__fgjhjnonk5u2_large_2x.png",
        alt: "5G",
        title: ["5G cellular"],
      }
    }
  },
]
