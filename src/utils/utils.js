export const formatValue = (value) => {
  const milli = value * 1000;

  const hours = Math.floor(milli / 3600000);
  const minutes = Math.floor((milli % 3600000) / 60000);
  const seconds = minutes > 0 ? (milli - minutes * 60000) / 1000 : value;

  return `${hours > 0 ? `${hours}:` : ""}${
    minutes > 0 ? `${minutes}:` : ""
  }${seconds}`;
};
