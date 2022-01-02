const sum = (values = []) => {
  return values.reduce((prev, cur) => prev + cur, 0);
};

module.exports = {
  sum,
};
