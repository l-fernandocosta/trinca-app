import { Button } from "@/components/ui/button";
import { currencyFormat } from "@/packages/helpers/currency-formatter.helper";
import { Barbecue } from "@/packages/http/entities/barbecue";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { Clock, DollarSign, Eye, Users2 } from "lucide-react";
import Link from "next/link";

export const BarbecueCard = ({ bbq }: { bbq: Barbecue }) => {
  return (
    <div className='flex flex-col min-h-56 border rounded-sm pt-5 pl-6 pb-8 relative gap-6'>
      <div className=' flex flex-col'>
        <span className='font-semibold'>
          {format(new Date(bbq.date), "dd/MM", { locale: pt })}
        </span>
        <span className='text-muted-foreground text-xs'>{bbq.title}</span>
      </div>

      <div className='flex flex-row gap-5'>
        <div className='flex flex-row items-center gap-1'>
          <Users2 className='text-custom-yellow-500 w-4 h-4' />
          <span className='text-sm'>{bbq.maxCapacity}</span>
        </div>
        <div className='flex flex-row items-center gap-1'>
          <Clock className='text-custom-yellow-500 w-4 h-4' />
          <span className='text-sm'>{bbq.hour}</span>
        </div>
        <div className='flex flex-row items-center gap-1'>
          <DollarSign className='text-custom-yellow-500 w-4 h-4' />
          <span className='text-sm'>{currencyFormat(bbq.minContribution)}</span>
        </div>
      </div>
      <span className='text-xs text-muted-foreground'>
        {bbq.createdBy.email}
      </span>
      <Button
        asChild
        size='icon'
        className='absolute right-3'
        aria-label='Ver mais informações sobre o churrasco'
      >
        <Link href={`/barbecue/${bbq.id}?origin=home&name=${bbq.title}`}>
          <Eye className='w-3 h-3' />
        </Link>
      </Button>
    </div>
  );
};
