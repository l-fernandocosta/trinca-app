import { http } from "@/packages/http/client";
import { BarbecueGuest } from "@/packages/http/entities/barbecue-guest";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

export const invitedBbqsQueryKey = (id?: string) => ["INVITED_BBQS_QUERY_KEY", id];

export async function findInvitedBbqs(ctx: QueryFunctionContext) {
  const [, id] = ctx.queryKey as [key: string, id: string];

  const bbqs = await http
    .get<BarbecueGuest[]>(`/barbecue/user/invited/${id}`)
    .then((r) => r.data)
    .catch((e) => {
      throw e;
    });

  return bbqs;
}

export function useInvitedBBQS(id?: string) {
  return useQuery({
    queryFn: findInvitedBbqs,
    enabled: id ? true : false,
    queryKey: invitedBbqsQueryKey(id),
  });
}
