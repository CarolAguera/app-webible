import AxiosApi from ".";

export const searchVersions = async () => {
  const { data } = await AxiosApi.get(`versions`);
  return data;
};
