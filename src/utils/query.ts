export const generateUrlWithQueryParams = (
  url: string,
  params: { [key in string]?: string },
) => {
  const query = Object.entries(params)
    .filter(([_key, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `${url}?${query}`;
};

export const generateUrlSearchParam = (data: {
  [key in string]?: string | null;
}) => {
  const params = new URLSearchParams();
  Object.keys(data)
    .filter((key) => !!data[key])
    .forEach((key) => params.append(key, data[key] ?? "-"));
  return params;
};
