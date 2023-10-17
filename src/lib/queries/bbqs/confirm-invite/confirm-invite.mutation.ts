import { http } from "@/packages/http/client";
import { ConfirmInviteInput } from "./confirm-invite.input";

export async function confirmInvite(input: ConfirmInviteInput) {
  await http.patch(`/barbecue/guest/confirm`, input).catch((e) => {
    throw e;
  });
}
