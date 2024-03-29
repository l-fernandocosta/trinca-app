import { BackButton } from "@/components/shared/back-button";
import { BarbecueProperties } from "./components/barbecue-properties";

const BarbecuePage = async (props : {  params:  {id : string},  searchParams: { origin?: string, name: string}} ) => {
  const {  name } = props.searchParams;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
      <div className='flex flex-row items-center gap-3 w-full border-b py-2 col-span-full'>
        <BackButton />
        <h1 className='text-sm font-semibold'>{name}</h1>
      </div>
      <BarbecueProperties />
    </div>
  );
};

export default BarbecuePage;
