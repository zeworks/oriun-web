import { LOCAL_STORAGE_EXISTS } from "../config/constants"

const get = (key: string) => {
  if (LOCAL_STORAGE_EXISTS)
    return localStorage.getItem(key);

  return ""
}

const set = (key: string, value: string) => {
  if (LOCAL_STORAGE_EXISTS)
    return localStorage.setItem(key, value);
  return
}

const rmv = (key: string) => {
  if (LOCAL_STORAGE_EXISTS)
    return localStorage.removeItem(key)
  return
}

export const storage = {
  get,
  set,
  rmv
}
