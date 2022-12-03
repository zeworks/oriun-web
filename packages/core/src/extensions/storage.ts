import { LOCAL_STORAGE_EXISTS } from "../base/constants";
import { Storage } from "../domain/extensions/storage";

const get = (key: string): string => {
  if (LOCAL_STORAGE_EXISTS)
    return localStorage.getItem(key) ?? "";

  return ""
}

const set = (key: string, value: string) => {
  if (LOCAL_STORAGE_EXISTS)
    return localStorage.setItem(key, value);
  return
}

const remove = (key: string) => {
  if (LOCAL_STORAGE_EXISTS)
    return localStorage.removeItem(key)
  return
}

export const storage: Storage = {
  get,
  set,
  remove
}
