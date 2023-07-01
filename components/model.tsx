
import Image from 'next/image';
import { PhoneModel, SpecData } from '../constants/data';
import Buy from './Buy';

interface ModelProps {
  model: PhoneModel;
}

export function Model({ model }: ModelProps ) {
  const specs = model.specs;

  return (
    <div className="grid grid-col-1">
      <div className="grid grid-col-1">
        <Image src={model.imgURL} alt={model.name} width={200} height={200} />
        <div>colors</div>
        <div className="grid grid-col-1">
          <span>{model.name}</span>
          <span>{model.description}</span>
        </div>
        <div className="grid grid-col-1">
          <span>{model.price}</span>
          <div className="w-[50px]">
            <Buy size={1} />
          </div>
          <span>{`Learn more >`}</span>
        </div>
      </div>
      <div className="grid grid-col-1">
        <div className="grid grid-col-1">
          <span>{model.screenSize}</span>
          {model.display.map((display, index) => (
            <span key={index}>{display}</span>
          ))}
        </div>
        {Object.values(specs).map((value, index) => {
            const spec: SpecData = value;
            if (spec == undefined) 
              return <div>{`—`}</div>
            else return (
              <div className="grid grid-col-1 justify-center">
                <Image src={spec.image} alt={spec.alt} width={40} height={40} />
                {spec.title.map((title, index) => (
                  <span key={index}>{title}</span>
                ))}
                {spec.lines && spec.lines.map((line, index) => (
                  <span key={index}>{line}</span>  
                ))}
              </div>
            )
        })}
      </div>

    </div>
  )

}