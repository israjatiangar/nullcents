export function minutesToMilliseconds(minutes: number): number {
  const secondsInMilliseconds = 1000,
    minutesInSeconds = 60;
  return minutes * minutesInSeconds * secondsInMilliseconds;
}
export type dateOrder = "latest" | "oldest";

export function sortByLatest(
  itemA: string,
  itemB: string,
  sortOrder: dateOrder = "latest",
): number {
  const dateA = new Date(itemA).getTime();
  const dateB = new Date(itemB).getTime();
  return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
}
