import { navOptions, smallNavOptions, appleIcon, downArrow } from '../constants/data';
import { IconType } from 'react-icons';
import Buy from './Buy';
//834 bp 

const topRow = () => {
  return (
    <div className="flex-[0.4] flex justify-center items-center">
      <div className="hidden md2:flex w-full justify-between items-center px-4">
        {navOptions.map((option, index) => (
          <div key={index}>
            {option.icon ? 
              <option.icon size={option.size ? option.size : 18} className="cursor-pointer" /> 
              : 
              <span className="cursor-pointer">{option.name}</span>
            }
          </div>
        ))}
      </div>
      <div className="flex md2:hidden w-full justify-between items-center gap-1 px-4">
        <div className="flex items-center">
          <appleIcon.icon size={appleIcon.size ? appleIcon.size : 18} className="cursor-pointer" />
        </div>
        <div className="flex items-center justify-center gap-7">
          {smallNavOptions.map((option, index) => (
            <option.icon key={index} size={option.size ? option.size : 18} className="cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  )
}

const NavBar = () => {
  return (
    <div className="flex sticky top-[-2.4rem] h-24 z-30 w-full justify-center
                    border-b-[1px] border-slate-300
                    text-[.74rem] font-light text-zinc-800 bg-white">
      <div className="flex flex-col h-full w-full max-w-[1050px]">
        {topRow()}
        <div className="flex-[0.6] flex items-center px-5 justify-between">
              <div className="">
                <span className="text-xl font-medium cursor-pointer">iPhone 14</span>
              </div>
              <div className="flex items-center gap-3 md2:gap-5">
                <div className="hidden md2:flex items-center gap-5">
                  <span className="hover:text-blue-500 cursor-pointer">Overview</span>
                  <span className="hover:text-blue-500 cursor-pointer">Switch from Android to iPhone</span>
                  <span className="hover:text-blue-500 cursor-pointer">Tech Specs</span>
                </div>
                <downArrow.icon size={downArrow.size ? downArrow.size : 18} className="flex md2:hidden cursor-pointer" />
                <Buy size={1}/>
              </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;