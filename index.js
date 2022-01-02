const sum = (values = []) => {
  return values.reduce((prev, cur) => prev + cur);
};

const subtract = (values = []) => {
  return values.reduce((prev, cur) => prev - cur);
};

const multiply = (values = []) => {
  return values.reduce((prev, cur) => prev * cur);
};

const divide = (values = []) => {
  return values.reduce((prev, cur) => prev / cur);
};

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
