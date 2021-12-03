export interface State {
  id: string;
  desctiption: string;
  text: string[];
  res: string;
  prevStateId: string;
  nextStateId: string;
  userProp?: string;
  end?: boolean;
}
