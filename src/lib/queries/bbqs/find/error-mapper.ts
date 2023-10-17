import { AxiosError } from "axios";

export const findBBQErrorMapper = (e: AxiosError) => {
  let msg = "";
  const error = e.response?.data as { message?: string };

  switch (error.message) {
    case "INVALID_CONTRIBUTION":
      msg = "Valor de contribuição inválido. ";
      break;
    case "USER_NOT_FOUND":
      msg = "Usuário não encontrado.";
      break;
    case "BARBECUE_NOT_FOUND":
      msg = "Não encontramos nenhum churrasco.";
      break;
    case "BARBECUE_NOT_AVAILABLE_TO_JOIN":
      msg = "Infelizmente o churrasco atingiu a capacidade máxima.";
      break;
    case "USER_ALREADY_IN_THE_BBQ":
      msg = "Você já participa deste churrasco. ";
      break;
    default:
      msg = "Não foi possível finalizar esta ação. Tente novamente mais tarde.";

      break;
  }
  return msg;
};
