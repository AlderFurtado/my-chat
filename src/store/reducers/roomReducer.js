const initialState = null;

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_ROOM":
      return action.payload;
    default:
      return state;
  }
};
