import { config, props } from "./config";

config as {n: number | string}; // error: n is not read-only in {n: number | string}

props as {n: number | string}; // error: n is not read-only in {n: number | string}
