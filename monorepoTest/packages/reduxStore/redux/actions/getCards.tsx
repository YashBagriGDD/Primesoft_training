export interface RollCallCardInterface {
  state: string;
  billNum: string;
  name: string;
  endDate: string;
  isSoftRollCall?: boolean;
  summary?: string;
}

export const GetCards = (jsonItem: RollCallCardInterface[]) => {
  return {
    type: "BUILD",
    payload: jsonItem,
  };
};
