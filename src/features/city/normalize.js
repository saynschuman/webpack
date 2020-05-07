import getNested from "@/commons/utils/getNested";

export const selectRecentData = (data) => {
  const daily = getNested(data, "daily");
  if (!daily) return [];
  if (!Array.isArray(daily)) return [];
  return daily;
};
