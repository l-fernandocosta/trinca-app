import { addDays, format, lastDayOfMonth } from "date-fns";
import { FindManyBBQSOutput } from "./find-many-output";

export interface FindManyBarbecuesQueryParams {
  from?: string;
  to?: string;
  id?: string;
}

async function fetchBarbecues(
  input: FindManyBarbecuesQueryParams
): Promise<FindManyBBQSOutput> {
  const query = `from=${
    input.from || format(addDays(new Date(), -30), "yyyy-MM-dd")
  }&to=${input.to || lastDayOfMonth(new Date())}&userid=${input.id}`;

  const response = await fetch(`${process.env.BASE_URL}/barbecue?${query}`, {
    cache: "no-cache",
    next: {
      tags: ["bbq"],
    },
  });

  console.log(query);
  if (!response.ok) {
    throw new Error("FAILED_FETCH_BBQS");
  }

  const data: FindManyBBQSOutput = await response.json();
  console.log(data, "data");
  return data;
}

export { fetchBarbecues };
