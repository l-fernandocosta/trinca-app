"use client";
import { CustomAvatar } from "@/components/shared/custom-avatar";
import { Badge } from "@/components/ui/badge";
import { BarbecueGuest } from "@/packages/http/entities/barbecue-guest";
import { useUser } from "@clerk/nextjs";
import { JoinBarbecueDialog } from "./join-barbecue.dialog";

enum GuestStatus {
  PENDING = "Pendente",
  CONFIRMED = "Confirmado",
}

export const BarbecueGuestGrid = ({ guests }: { guests?: BarbecueGuest[] }) => {
  const { user } = useUser();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-full max-h-screen overflow-y-auto gap-2'>
      <div className='col-span-full flex items-center w-full justify-between'>
        <span className='font-semibold text-sm col-span-full'>
          Quem vai participar
        </span>
        {guests && guests.find((guest) => guest.id == user?.id) ? null : (
          <JoinBarbecueDialog />
        )}
      </div>
      {guests ? (
        guests.map((guest) => (
          <div
            key={guest.id}
            className='w-full flex h-auto p-2  items-center flex-col border rounded-sm gap-3'
          >
            <CustomAvatar
              alt={guest.user?.email}
              fallback={guest.user?.firstName.split("")[0]}
              src={guest.user?.avatar}
            />
            <span className='text-sm font-semibold'>
              {guest.user.firstName} {guest.user.lastName}
            </span>
            <Badge variant={"outline"} className='rounded'>
              Status: {GuestStatus[guest.status]}
            </Badge>
          </div>
        ))
      ) : (
        <span>Ninguem no churrasco até o momento. </span>
      )}
    </div>
  );
};
