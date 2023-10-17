
import {
  FindManyBarbecuesQueryParams,
  fetchBarbecues,
} from "@/lib/queries/bbqs/find-many/find-many.query";
import { currentUser } from "@clerk/nextjs/server";
import { BarbecueCard } from "./barbecue-card";


export const BarbecueGrid = async ({
  searchParams,
}: {
  searchParams: FindManyBarbecuesQueryParams;
}) => {
  const user = await currentUser();
  
  const bbqs = await fetchBarbecues({
    from: searchParams.from,
    to: searchParams.to,
    id: user?.id, 
  });


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-screen overflow-y-auto gap-4 pb-6'>
      {bbqs.map((bbq) => (
        <BarbecueCard key={bbq.id} bbq={bbq} />
      ))}
    </div>
  );
};
