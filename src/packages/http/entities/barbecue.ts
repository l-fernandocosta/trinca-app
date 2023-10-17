import { BarbecueGuest } from "./barbecue-guest";
import { User } from "./user";

export interface Barbecue {
  id: string;
  title: string;
  date: string;
  hour: string;
  isPublic: boolean;
  totalPrice: number;
  minContribution: number;
  maxCapacity: number;
  userId: string;
  createdBy: User;
  guests: BarbecueGuest[]
}
