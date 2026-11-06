import { minutesToMilliseconds } from "./DateAndTimeHelper";

export function getAPIfromLocal(storedName: string): typResult {
  const result: typResult = {
    data: null,
    error: null,
  };
  try {
    const stored = localStorage.getItem(storedName);
    if (stored) {
      const storedData: typLocalData = JSON.parse(stored);
      const expiry = new Date(storedData.expiresAt).getTime();
      if (expiry > Date.now()) {
        console.log("retrieved from local");
        result.data = storedData.data;
      } else {
        result.error = Error("Local Data Expired");
      }
    } else {
      result.error = Error("Local Data Empty");
    }
  } catch (err) {
    result.error = err instanceof Error ? err : Error(String(err));
  }
  return result;
}

export async function fetchDataFromAPILink(
  fetchLink: string,
  storeAsName: string,
): Promise<typResult> {
  const result: typResult = {
    data: null,
    error: null,
  };
  try {
    const response = await fetch(fetchLink);
    if (!response.ok) {
      result.error = Error(response.status.toString());
    } else {
      result.data = await response.json();
      const expiry = new Date(Date.now() + minutesToMilliseconds(10));
      const localData: typLocalData = {
        expiresAt: expiry,
        data: result.data,
      };
      localStorage.setItem(storeAsName, JSON.stringify(localData));
    }
  } catch (err) {
    result.error = err instanceof Error ? err : Error(String(err));
  }
  return result;
}
