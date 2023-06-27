
import Image from "next/image";

import { MdKeyboardArrowRight } from 'react-icons/md';
import { savingsData } from "../constants/data";
import { CardData } from "../constants/data";

interface SectionProps {
  data: CardData[],
  header: string,
}

interface CardProps {
  data: CardData,
  index: number,
}

const Card = ({data, index}: CardProps) => {
  return (
    <div key={index} className="flex flex-col justify-between pt-[25px] rounded-xl bg-zinc-100
                                w-full max-w-[24rem] md:w-[21rem] lg:w-[20rem] 
                                h-[34rem] md:h-[31rem] lg:h-[33rem] overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center py-8 px-10 md:px-0">
        <div className="flex flex-col justify-evenly items-center text-center min-h-[9rem] md:h-[10rem]">
          {(data.icon && data.iconAlt) &&
            <div className="">
              <Image src={data.icon} height={40} width={40} alt={data.iconAlt} />
            </div>
          }
          <span className="px-12 text-2xl font-medium">{data.title}</span>
          <span className="px-6 text-md font-light">{data.desc}</span>
        </div>
        <a href={data.link} className="flex flex-row items-center font-light text-blue-500 hover:underline">
          {data.linkText}
          <MdKeyboardArrowRight size={17} />
        </a>
      </div>
      <div className="flex justify-center items-end">
        <Image src={data.imgURL} alt={data.alt} width={data.width} height={data.height} />
      </div>
    </div>
  );
}

const CardSection = ({ data, header }: SectionProps) => {
  return (
    <div className="h-fit flex justify-center">
      <div className="flex flex-col justify-center items-center w-max max-w-[1050px] py-16 px-6">
        <div className="flex flex-wrap justify-start w-full pb-16 lg:pe-[30rem]">
          <span className="text-4xl md:text-6xl font-medium">
            {header}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center md:justify-normal md:w-max"
        >
          {data.map((data, index) => (
            <Card data={data} index={index} />
            // <div key={index} className="flex flex-col justify-between rounded-xl bg-zinc-100
            //                             max-w-[400px] h-[525px] w-max overflow-hidden pt-[25px]
            //                             md:w-[19rem]"
            // >
            //   <div className="flex flex-col justify-center items-center py-8 px-10 md:px-0">
            //     <div className="flex flex-col justify-evenly items-center text-center min-h-[9rem] md:h-[10rem]">
            //       {(data.icon && data.iconAlt) &&
            //         <div className="">
            //           <Image src={data.icon} height={40} width={40} alt={data.iconAlt} />
            //         </div>
            //       }
            //       <span className="px-12 text-2xl font-medium">{data.title}</span>
            //       <span className="px-6 text-md font-light">{data.desc}</span>
            //     </div>
            //     <a href={data.link} className="flex flex-row items-center font-light text-blue-500 hover:underline">
            //       {data.linkText}
            //       <MdKeyboardArrowRight size={17} />
            //     </a>
            //   </div>
            //   <div className="flex justify-center items-end">
            //     <Image src={data.imgURL} alt={data.alt} width={data.width} height={data.height} />
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;