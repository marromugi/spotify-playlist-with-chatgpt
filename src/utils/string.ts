export const generateRandomString = (length: number) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let text = "";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(
      Math.floor(Math.random() * possible.length),
    );
  }

  return text;
};

export const generateBase64Text = (value: string) => {
  return Buffer.from(value).toString("base64");
};
