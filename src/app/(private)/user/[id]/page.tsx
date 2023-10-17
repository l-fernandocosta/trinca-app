import { BackButton } from "@/components/shared/back-button";
import { findByUserId } from "@/lib/queries/bbqs/find-by-user-id/find-by-user-id.query";
import { currencyFormat } from "@/packages/helpers/currency-formatter.helper";
import { currentUser } from "@clerk/nextjs/server";
import { format } from "date-fns";
import { Clock, DollarSign, Users2 } from "lucide-react";

const UserBBQs = async () => {
  const user = await currentUser();
  const bbqs = await findByUserId(user?.id);
  return (
    <div className='flex flex-col w-full max-h-screen overflow-y-auto gap-5'>
      <div className='flex flex-row items-center gap-3 py-3 border-b'>
        <BackButton />
        <span>
          Churrascos de <strong>{user?.firstName}</strong>
        </span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20'>
        {bbqs.map((bbq) => (
          <div
            key={bbq.id}
            className='h-auto col-span-1 flex justify-start border p-4 rounded flex-col '
          >
            <div className='w-full flex items-center flex-row justify-between border-b  mb-2 py-2'>
              <div className="flex flex-col">
                <span className='text-2xl font-semibold'>
                  {format(new Date(bbq.date), "dd/MM")}{" "}
                </span>
                <span className="text-xs text-muted-foreground">{bbq.title}</span>
              </div>
              <span>{currencyFormat(bbq.totalPrice)} </span>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <Clock className='w-3 h-3' />
              <span className='text-muted-foreground text-sm'>
                Horário: {bbq.hour}
              </span>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <DollarSign className='w-3 h-3' />
              <span className='text-muted-foreground text-sm'>
                Contribuição mínima: {currencyFormat(bbq.minContribution)}
              </span>
            </div>
            <div className='flex flex-row items-center gap-3'>
              <Users2 className='w-3 h-3' />
              <span className='text-muted-foreground text-sm'>
                Participantes: {bbq.guests.length}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBBQs;
