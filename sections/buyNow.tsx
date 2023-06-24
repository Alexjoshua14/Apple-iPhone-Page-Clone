import Buy from '../components/Buy';

const BuyNow = () => {
  return (
    <div className="h-[14rem] flex justify-center">
      <div className="flex flex-col justify-center items-center gap-4 h-full text-center max-w-[280px] md:max-w-none">
        <span className="font-medium text-xl md:text-3xl">iPhone 14 and iPhone 14 Plus</span>
        <div className="flex flex-wrap items-center justify-center gap-1 font-medium text-sm md:text-md md:px-0">
          <span>From $799 or $33.29/mo. for 24mo. </span>
          <span> before trade-in*</span>
        </div>
        <Buy size={1.5} />
      </div>
    </div>
  );
}

export default BuyNow;