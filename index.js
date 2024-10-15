const nodethree = import('./index.mjs');

module.exports = async function(...args) {
  const module = await nodethree;
  return module.default(...args);
};