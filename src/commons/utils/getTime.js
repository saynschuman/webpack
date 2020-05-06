export default (timestamp) => {
  const isValid = new Date(timestamp).getTime() > 0;
  if (!isValid) return null;
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
