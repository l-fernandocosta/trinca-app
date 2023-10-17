import { BarbecueGuestStatus } from "../value-objects/barbecue-guest-status";
import { Barbecue } from "./barbecue";
import { User } from "./user";

export interface BarbecueGuest {
  id: string;
  contribution: number;
  status: BarbecueGuestStatus;
  user: User;
  userId: string;
  barbecue: Barbecue;
  barbecueId: string;
}
