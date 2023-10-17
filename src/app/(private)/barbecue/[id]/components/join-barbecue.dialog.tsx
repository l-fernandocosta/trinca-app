"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  onCloseDialog,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { findBBQErrorMapper } from "@/lib/queries/bbqs/find/error-mapper";
import { FindBarbecueByIdQueryKey } from "@/lib/queries/bbqs/find/find-query";
import { joinBBQ } from "@/lib/queries/bbqs/join-bbq/join-bbq.mutation";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export const JoinBarbecueDialog = () => {
  const { toast } = useToast();
  const client = useQueryClient();
  const { push } = useRouter();
  const params = useParams();
  const { user } = useUser();
  const { id } = params as { id: string };
  const [contribution, setContribution] = React.useState(1);

  const input = {
    id: user?.id,
    contribution,
    bbqId: id,
  };

  const joinBBQMutation = useMutation({
    mutationFn: () => joinBBQ(input),
    onSuccess: async () => {
      await client.invalidateQueries(FindBarbecueByIdQueryKey(input.bbqId));

      toast({
        title: "Deu tudo certo !",
        description: "Agora é só esperar o churras. ",
        action: (
          <Button asChild size='sm' variant={"outline"}>
            <Link href={`/user/invited/${user?.id}`}>Ver todos</Link>
          </Button>
        ),
      });

      onCloseDialog();
    },
    onError: (e: AxiosError) => {
      const errorMessage = findBBQErrorMapper(e);
      toast({
        title: "Ops, algo deu errado.",
        description: errorMessage,
      });
      console.error("Failed trying to join bbq", e);
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='sm' variant={"outline"}>
          Participar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quer participar ?</DialogTitle>
          <DialogDescription>
            Com quanto você quer contribuir.
          </DialogDescription>
        </DialogHeader>
        <Input
          type='number'
          min={1}
          value={contribution}
          placeholder='Contribuição'
          onChange={(e) => setContribution(Number(e.target.value || 0))}
        />
        <Button
          variant={"outline"}
          onClick={() => joinBBQMutation.mutate()}
          disabled={joinBBQMutation.isLoading}
        >
          Participar
        </Button>
      </DialogContent>
    </Dialog>
  );
};
