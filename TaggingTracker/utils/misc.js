export const truncStr = (str, length) => {
  if (str.length > length) {
    return str.substr(0, length) + '...';
  } else {
    return str;
  }
};
