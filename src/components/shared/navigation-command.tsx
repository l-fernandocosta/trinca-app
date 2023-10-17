


import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Beef, Flame } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const NavigationCommand = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen(open: boolean): void;
}) => {
  const { user  } = useUser();
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder='Procurar..' />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>
        <CommandGroup heading='Atividades'>
          <CommandItem>
            <Link href={`/user/${user?.id}`} className="flex flex-row gap-3">
              <Flame />
              Meus churrascos
            </Link>
          </CommandItem>
          <CommandItem>
            <Link href={`/user/invited/${user?.id}`} className="flex flex-row gap-3">
              <Beef />
              Churrascos que participei
            </Link>
          </CommandItem>
          
          <CommandItem>
            <SignOutButton>
              <Button variant={"destructive"}>Desconectar</Button>
            </SignOutButton>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </CommandDialog>
  );
};
