export default (weather) => {
  if (!weather) return null;
  return !!weather && Array.isArray(weather)
    ? weather.length
      ? weather[0].description
      : null
    : null;
};
