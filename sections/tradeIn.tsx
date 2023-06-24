import { MdKeyboardArrowRight } from 'react-icons/md';

const TradeIn = () => {
  return (
    <div className="hidden md:flex h-[6.5rem] items-center justify-center bg-zinc-100 ">
      <div className="flex flex-wrap gap-1 items-center justify-center">
        <span className="flex w-full justify-center">
          {`Get $200-$630 in credit toward iPhone 14 when you`}
        </span>
        <span>
          {`trade in iPhone 11 or higher.`}
          <a href="/">
            <sup className="text-[0.6rem] font-bold hover:text-blue-500">
              {`1`}
            </sup>
          </a>
        </span>
        <a href="/" className="flex items-end text-blue-500 hover:underline">
          {`Shop iPhone`}
        <MdKeyboardArrowRight size={21} />
        </a>
        
      </div>
    </div>
  );
}

export default TradeIn;