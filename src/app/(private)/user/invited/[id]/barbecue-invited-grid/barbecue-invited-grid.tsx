"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { confirmInvite } from "@/lib/queries/bbqs/confirm-invite/confirm-invite.mutation";
import {
  invitedBbqsQueryKey,
  useInvitedBBQS,
} from "@/lib/queries/bbqs/invited/find-invited-bbqs.query";
import { currencyFormat } from "@/packages/helpers/currency-formatter.helper";
import { BarbecueGuestStatusEnum } from "@/packages/http/value-objects/barbecue-guest-status.enum";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { format } from "date-fns";
import { DollarSign, User, Users2, Waypoints } from "lucide-react";

export const BarbecueInviteGrid = () => {
  const client = useQueryClient();
  const { user } = useUser();
  const { toast } = useToast();
  const { data: bbqs } = useInvitedBBQS(user?.id);

  const confirmInviteMutation = useMutation({
    mutationFn: async (bbqGuestId: string) =>
      confirmInvite({
        bbqGuestId,
        userid: user?.id || "",
      }),
    onSuccess: async () => {
      await client
        .invalidateQueries(invitedBbqsQueryKey(user?.id))
        .catch((e) => console.error(e, "invalidate error"))
        .then((r) => console.log(r, "invalidate success"));
      toast({ title: "Presença confirmada com sucesso." });
    },
    onError: (e: AxiosError) => {
      console.error(e);
      toast({ title: "Não foi possível confirmar sua presença. " });
    },
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {bbqs?.map((bbq) => (
        <div
          key={bbq.id}
          className='col-span-1 flex flex-col justify-start border rounded p-4 gap-2'
        >
          <div className='flex items-center flex-row justify-between border-b'>
            <span className='text-2xl font-semibold'>
              {format(new Date(bbq.barbecue.date), "dd/MM")}
            </span>
            <div className='flex flex-row items-center gap-3'>
              <Users2 className='w-3 h-3 text-custom-yellow-500' />
              <span>{bbq.barbecue.maxCapacity}</span>
            </div>
          </div>

          <div className='flex flex-row items-center gap-3'>
            <DollarSign className='w-3 h-3' />
            <span className='text-sm text-muted-foreground'>
              Contribuição: {currencyFormat(bbq.contribution)}
            </span>
          </div>

          <div className='flex flex-row items-center gap-3'>
            <User className='w-3 h-3' />
            <span className='text-sm text-muted-foreground'>
              Criado por: {bbq.barbecue.createdBy.email}
            </span>
          </div>

          <div className='flex flex-row items-center gap-3'>
            <Waypoints className='w-3 h-3' />
            <span className='text-sm text-muted-foreground'>
              Status: {BarbecueGuestStatusEnum[bbq.status]}
            </span>
          </div>

          {bbq.status == "PENDING" && (
            <Button
              size='sm'
              variant={"figma"}
              disabled={confirmInviteMutation.isLoading}
              onClick={() => confirmInviteMutation.mutate(bbq.id)}
            >
              Confirmar
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};
