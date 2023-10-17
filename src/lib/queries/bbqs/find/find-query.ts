import { http } from "@/packages/http/client";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { FindBarbecueOutput } from "./find-output";

export const FindBarbecueByIdQueryKey = (id?: string) => [
  "FindBarbecueByIdQueryKey",
  id,
];

async function findBarbecue(
  ctx: QueryFunctionContext
): Promise<FindBarbecueOutput> {
  const [, id] = ctx.queryKey as [key: string, id: string];

  const bbq = await http
    .get<FindBarbecueOutput>(`/barbecue/${id}`)
    .then((r) => r.data)
    .catch((e) => {
      throw e;
    });

  return bbq;
}

export const useBarbecueById = (id?: string) => {
  return useQuery({
    queryFn: findBarbecue,
    enabled: id ? true : false, 
    queryKey: FindBarbecueByIdQueryKey(id),
  });
};

export { findBarbecue };
