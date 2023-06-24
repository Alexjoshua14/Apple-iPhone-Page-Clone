import { IconType } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

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