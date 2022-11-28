import AxiosApi from ".";
import { Book } from "../types";

export const searchBook = async (): Promise<Book[]> => {
  const { data } = await AxiosApi.get("books");

  return data;
};
