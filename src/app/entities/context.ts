import { State } from "./state";

export interface Context {
  id: string;
  description: string;
  states: State[];
}
