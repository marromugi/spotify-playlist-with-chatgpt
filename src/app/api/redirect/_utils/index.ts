export const generateUrlSearchParam = (data: {
  [key in string]: string;
}) => {
  const params = new URLSearchParams();
  Object.keys(data).forEach((key) => params.append(key, data[key]));
  return params;
};
