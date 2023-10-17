import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { AddBarbecueForm } from "./add-barbecue-form";

export const AddBarbecueDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"figma"} size='sm' className="gap-2">
          <Plus className="w-3 h-3" /> Churrasco
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Novo churrasco</DialogTitle>
          <DialogDescription>
            Preencha todos os campos para criar um churrasco.
          </DialogDescription>
        </DialogHeader>
        <AddBarbecueForm />
      </DialogContent>
    </Dialog>
  );
};
