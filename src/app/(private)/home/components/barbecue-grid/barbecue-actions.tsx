import { AddBarbecueDialog } from "@/app/(private)/barbecue/components/add-bbq-dialog/add-barbecue-dialog";
import { DatePicker } from "@/components/ui/date-picker";

export const BarbecueActions = () => {
  return (
    <div className='w-full max-h-16 flex flex-row items-center justify-center py-7 gap-3 border-b'>
      <DatePicker />
      <AddBarbecueDialog />
    </div>
  );
};
