import AxiosApi from ".";

export const searchChapters = async (bookName: string, cap: number) => {
  const { data } = await AxiosApi.get(`verses/acf/${bookName}/${cap}`);
  return data;
};
