
interface BuyProps {
  size: number;
}

const Buy = ({size}: BuyProps) => {
  return (
    <button className={`bg-blue-600 rounded-full text-zinc-50 font-extralight`}
            style={{padding: `${size*.25}rem ${size*.75}rem`}}
      >
      Buy
    </button>
  );
};


export default Buy;

{/* <button className="bg-blue-600 px-3 py-1 rounded-full text-zinc-200 ">Buy</button> */}