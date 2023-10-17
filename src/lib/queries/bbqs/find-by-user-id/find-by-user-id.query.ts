import { Barbecue } from "@/packages/http/entities/barbecue";

export async function findByUserId(id?: string) {
  const response = await fetch(`${process.env.BASE_URL}/barbecue/user/${id}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("FAILED_FETCH_BBQ");
  }

  const data: Barbecue[] = await response.json();
  return data;
}
