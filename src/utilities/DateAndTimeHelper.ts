export function minutesToMilliseconds(minutes: number): number {
  const secondsInMilliseconds = 1000,
    minutesInSeconds = 60;
  return minutes * minutesInSeconds * secondsInMilliseconds;
}
export type dateOrder = "Ascending" | "Descending";

export function sortByDate(
  itemA: string,
  itemB: string,
  sortOrder: dateOrder = "Ascending",
): number {
  const dateA = new Date(itemA).getTime();
  const dateB = new Date(itemB).getTime();
  return sortOrder === "Ascending" ? dateB - dateA : dateA - dateB;
}
export function getLocaleDateString(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    localeMatcher: "best fit",
    dateStyle: "medium",
  });
}
export function getLocaleTimeString(dateString: string) {
  return new Date(dateString).toLocaleTimeString("en-GB", {
    timeStyle: "short",
  });
}
