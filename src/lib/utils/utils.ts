export const formatNumberWithK = (value: string | number): string => {
  // Parse the string to a number
  const num = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(num)) {
    throw new Error("Invalid number format");
  }

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B"; // Billion
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"; // Million
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K"; // Thousand
  } else {
    return num.toString(); // Less than a thousand
  }
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const getLastPath = (path: string, splitBy: string = "/"): string => {
  const pathList = path.split(splitBy);
  return pathList[pathList.length - 1];
};
