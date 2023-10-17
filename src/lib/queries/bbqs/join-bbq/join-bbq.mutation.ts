import { http } from "@/packages/http/client";
import { JoinBBQInput } from "./join-bbq.input";

export async function joinBBQ(input: JoinBBQInput) {
  await http.post(`/user/join-bbq`, input).catch((e) => {
    throw e;
  });
}
