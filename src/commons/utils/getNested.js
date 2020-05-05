export default (obj, ...args) =>
  args.reduce((obj, level) => obj && obj[level], obj);
