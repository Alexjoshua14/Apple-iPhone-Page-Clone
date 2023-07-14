
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

const titleLines = (title: string[]) => {
  if (title.length == 1) {
    return (<span>{title[0]}</span>)
  } else {
    return (
      <span>
        {title.map((line, index) => (
          <span key={index}>
            {line}
            <br className="hidden md:block" />
          </span>
        ))}
      </span>
    )
  }
}

const Card = ({ data, index }: CardProps) => {
  return (
    <div key={index} className="flex flex-col justify-between items-center rounded-xl bg-zinc-100
                                min-w-[321px] w-[90%] max-w-[390px]
                                md:w-[21rem] lg:w-[20rem] 
                                h-full max-h-[34rem] overflow-hidden"
    >
      <div className="flex-2 flex flex-col justify-center items-center max-w-[268px] md:max-w-none md:px-4 py-[46px]">
        <div className="flex flex-col justify-evenly items-center text-center ">
          {(data.icon && data.iconAlt) &&
            <div className="">
              <Image src={data.icon} height={40} width={40} alt={data.iconAlt} />
            </div>
          }
          <span className="md:px-12 text-2xl font-medium">
            {titleLines(data.title)}
          </span>
          <span className="md:px-6 text-md font-light">{data.desc}</span>
        </div>
        <a href={data.link} className="mt-[.6rem] text-center items-center font-light text-blue-500 hover:underline">
          <span className="">{data.linkText}</span>
          <MdKeyboardArrowRight size={17} className="inline" />
        </a>
      </div>
      <div className={`flex justify-center items-end ${data.mb && "mb-[" + data.mb + "px]"}`}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 
                        items-center justify-center md:justify-normal 
                        md:w-max h-[1436px] md:h-[1046px] lg:h-[521px]"
        >
          {data.map((data, index) => (
            <Card key={index} data={data} index={index} />
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