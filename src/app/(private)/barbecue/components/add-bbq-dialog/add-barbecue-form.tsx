"use client";

import { Button } from "@/components/ui/button";
import { onCloseDialog } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  AddBBQValidation,
  addBBQValidation,
} from "@/lib/forms/bbq/add-bbq.validation";
import { AddBBQInput } from "@/lib/queries/bbqs/add/add-bbq.input";
import { addBBQMutation } from "@/lib/queries/bbqs/add/add-bbq.mutation";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { format } from "date-fns";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const AddBarbecueForm = () => {
  const { toast } = useToast();
  const { user } = useUser();
  const { push } = useRouter();

  const form = useForm<AddBBQValidation>({
    resolver: zodResolver(addBBQValidation),
  });

  const bbqMutation = useMutation({
    mutationFn: (input: AddBBQInput) => addBBQMutation(input),
    onSuccess: () => {
      toast({
        title: "Churrasco criado com sucesso. 🥩",
        action: (
          <Button variant={"figma"} size='icon' asChild aria-label="Ver todos os churrascos criados por você">
            <Link href={`/user/${user?.id}`}><Eye /></Link>
          </Button>
        ),
      });
      push("/home");
      onCloseDialog();
    },
    onError: (e: AxiosError) => {
      console.error("Failed trying to add barbecue.", e);
      toast({ title: "Não conseguimos adicionar a o churrasco. " });
    },
  });

  const onAdd = (data: AddBBQValidation) => {
    bbqMutation.mutate({
      ...data,
      userId: user?.id || "",
    });
  };

  return (
    <Form {...form}>
      <form
        className='grid grid-cols-2 gap-5'
        onSubmit={form.handleSubmit(onAdd)}
      >
        <FormField
          name='title'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder='Título' {...field} />
              </FormControl>
              <FormDescription>Motivo do churrasco.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='date'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data</FormLabel>
              <FormControl>
                <Input placeholder='Data' {...field} type='date' min={format(new Date(), 'yyyy-MM-dd')} />
              </FormControl>
              <FormDescription>Data do evento.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='hour'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horário</FormLabel>
              <FormControl>
                <Input placeholder='Horário' {...field} type='time' />
              </FormControl>
              <FormDescription>Horário do evento</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='maxCapacity'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Capacidade máxima</FormLabel>
              <FormControl>
                <Input placeholder='Capacidade' {...field} type='number' />
              </FormControl>
              <FormDescription>
                Capacidade do local. (Ninguém poderá participar após a
                capacidade máxima ser atingida.)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='minContribution'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contribuição mínima</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  min={1}
                  type='number'
                  placeholder='Contribuição mínima'
                />
              </FormControl>
              <FormDescription>
                O valor mínimo de contribuição por participante.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='totalPrice'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Arrecadação total</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  min={1}
                  type='number'
                  placeholder='Arrecadação total'
                />
              </FormControl>
              <FormDescription>
                O valor total para realizar o evento.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='col-span-full' variant={"figma"}>
          Criar Churrasco
        </Button>
      </form>
    </Form>
  );
};
