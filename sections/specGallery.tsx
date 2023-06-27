import { cardSet } from "../components/cards";

const SpecGallery = () => {
  
  return (
    <div className="flex justify-center h-max md:h-[130rem] py-10 border-2 border-yellow-500">
      <div className="w-[400px] flex flex-col h-full justify-center
                      md:w-[700px] md:grid grid-cols-5 gap-2 grid-rows-8
                      lg:w-[1000px]
      ">
        {cardSet.map((item, index) => (
            <div key={index} className={`grid-item-${index} md:h-full rounded-[1.5rem] bg-zinc-100 overflow-hidden`}>
              {item}
            </div>
        ))}
      </div>
    </div>
  );
}

export default SpecGallery;