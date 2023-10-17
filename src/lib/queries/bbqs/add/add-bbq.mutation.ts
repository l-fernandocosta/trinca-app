import { http } from "@/packages/http/client";
import { AddBBQInput } from "./add-bbq.input";

export const addBBQMutation = async (input: AddBBQInput) => {
  await http.post(`/barbecue`, input).catch((e) => {
    throw e;
  });
};


