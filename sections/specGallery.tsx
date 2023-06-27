import { specData } from "../constants/data";

const SpecGallery = () => {
  return (
    <div className="flex justify-center h-max md:h-[150rem] border-2 border-yellow-500">
      <div className="w-full flex flex-col h-full justify-center
                      md:w-[700px] md:grid grid-cols-3 gap-2
                      lg:w-[1000px]
      ">
        {specData.map((item, index) => (
            <div key={index} className={`grid-item-${index} rounded-[1.5rem] bg-zinc-100`}>
              <div className={`h-full w-full`}>
                {item.header}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default SpecGallery;