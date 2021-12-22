export const GetCardsFromJson = (jsonItem: string) => {
  let parsedJson = JSON.parse(jsonItem);

  return {
    type: "BUILD",
    payload: parsedJson,
  };
};
