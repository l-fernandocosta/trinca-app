import { BackButton } from "@/components/shared/back-button";
import { BarbecueInviteGrid } from "./barbecue-invited-grid/barbecue-invited-grid";

const InvitedPage = () => {
  return (
    <div className='flex flex-col w-full max-h-screen h-full overflow-y-auto gap-5'>
      <div className='py-3 gap-3 flex flex-row items-center border-b'>
        <BackButton />
        <span className='text-sm font-semibold'>Churrascos que participou</span>
      </div>
      <BarbecueInviteGrid />
    </div>
  );
};

export default InvitedPage;
