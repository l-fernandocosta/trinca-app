import { FindManyBarbecuesQueryParams } from "@/lib/queries/bbqs/find-many/find-many.query";
import { BarbecueActions } from "./components/barbecue-grid/barbecue-actions";
import { BarbecueGrid } from "./components/barbecue-grid/barbecue-grid";

const HomePage = async ({
  searchParams,
}: {
  searchParams: FindManyBarbecuesQueryParams;
}) => {
  const { from, to } = searchParams;
  return (
    <div className='flex flex-col w-full max-h-screen gap-5 overflow-y-auto'>
      <BarbecueActions />
      <BarbecueGrid
        searchParams={{
          from,
          to,
        }}
      />
    </div>
  );
};

export default HomePage;
