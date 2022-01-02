const sum = (values = []) => {
  return values.reduce((prev, cur) => prev + cur, 0);
};

const subtract = (values = []) => {
  return values.reduce((prev, cur) => prev - cur, 0);
};

const multiply = (values = []) => {
  return values.reduce((prev, cur) => prev * cur, 0);
};

const divide = (values = []) => {
  return values.reduce((prev, cur) => prev / cur, 0);
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
