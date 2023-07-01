import { phoneModels } from '../constants/data';
import { Model } from '../components/model';

const CompareModels = () => {
  return (
    <div className="h-[40rem] border-2 border-slate-500">
      Compare Models Section
      {/* <div>
        {`Which iPhone is right for you?`}
      </div>
      <div className="grid grid-cols-2 gap-8 text-center justify-center items-center">
        {phoneModels.map((model, index) => (
          
            <Model key={index} model={model} />
          
        ))}
      </div> */}
    </div>
  );
}

export default CompareModels;