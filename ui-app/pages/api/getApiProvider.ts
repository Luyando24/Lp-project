import { ApiPromise, WsProvider } from "@polkadot/api";
import fs from "fs";

export const getApiProvider = async () => {
  const provider = new WsProvider('ws://127.0.0.1:9944');
  const types = JSON.parse(fs.readFileSync('./types.json', 'utf8'));
  const api = await ApiPromise.create({ provider, types });
  return api;
};

export default getApiProvider;
