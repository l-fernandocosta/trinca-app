export interface AddBBQInput {
  title: string;
  date: string;
  hour: string;
  isPublic?: boolean;
  totalPrice: number;
  minContribution: number;
  maxCapacity: number;
  userId: string;
}