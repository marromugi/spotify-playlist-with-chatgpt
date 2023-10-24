export const convertSecondsToMin = (sec: number) => {
  const min = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  return `${min}:${seconds.toString().padStart(2, "0")}`;
};

export const convertMillSecondsToMin = (millSec: number) => {
  const sec = Math.floor(millSec / 1000);
  return convertSecondsToMin(sec);
};
