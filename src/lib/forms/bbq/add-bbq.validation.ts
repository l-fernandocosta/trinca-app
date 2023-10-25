import { format } from "date-fns";
import { z } from "zod";

const required_error = "Campo obrigatório.";
export const addBBQValidation = z.object({
  title: z
    .string({
      required_error,
    })
    .min(1, { message: "Utilize pelo menos 5 caracteres." }),
  date: z
    .string({ required_error,invalid_type_error: "Utilize uma data válida." })
    .transform((date) => format(new Date(date), "yyyy-MM-dd")),
  hour: z.string({ required_error }),
  totalPrice: z.string({ required_error }).min(0).transform((val) => Number(val)),
  minContribution: z
    .string({
      required_error,
    })
    .transform((val) => Number(val)),

  maxCapacity: z
    .string({ required_error })
    .min(1)
    .transform((val) => Number(val)),
});

export type AddBBQValidation = z.infer<typeof addBBQValidation>;
