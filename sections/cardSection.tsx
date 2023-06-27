
import Image from "next/image";

import { MdKeyboardArrowRight } from 'react-icons/md';
import { savingsData } from "../constants/data";
import { CardData } from "../constants/data";

interface SectionProps {
  data: CardData[],
  header: string
}

const CardSection = ({ data, header }: SectionProps) => {
  return (
    <div className="h-fit flex justify-center">
      <div className="flex flex-col justify-center items-center w-min py-16">
        <div className="flex flex-wrap justify-start w-full pb-16 lg:pe-[30rem]">
          <span className="text-4xl md:text-6xl font-medium">{header}</span>
        </div>
        <div className="flex flex-wrap items-center gap-5 justify-center w-min
                        md:justify-normal md:w-[40rem] 
                        lg:justify-center lg:w-max"
        >
          {data.map((data, index) => (
            <div key={index} className="flex flex-col justify-between rounded-xl bg-zinc-100
                                        max-w-[400px] h-[525px] w-max overflow-hidden pt-[25px]
                                        md:w-[19rem]"
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;