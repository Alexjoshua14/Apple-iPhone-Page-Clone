import Buy from '../components/Buy';

const BuyNow = () => {
  return (
    <div className="h-[14rem] flex justify-center">
      <div className="flex flex-col justify-center items-center gap-4 h-full w-1/2">
        <span className="font-medium text-3xl">iPhone 14 and iPhone 14 Plus</span>
        <span className="font-medium text-md">From $799 or $33.29/mo. for 24mo. before trade-in*</span>
        <Buy size={1.5} />
      </div>
    </div>
  );
}

export default BuyNow;