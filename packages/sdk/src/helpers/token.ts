import { ORIUN_TOKEN_KEY } from "../config/constants";
import { storage } from "../extensions/storage";

export const getOriunToken = () => storage.get(ORIUN_TOKEN_KEY);
export const setOriunToken = (token: string) => storage.set(ORIUN_TOKEN_KEY, token)
