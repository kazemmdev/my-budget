const ADD_ENTRY = "ADD_ENTRY";
const REMOVE_ENTRY = "REMOVE_ENTRY";
const UPDATE_ENTRY = "UPDATE_ENTRY";

export const addEntries = (title, amount) => {
  return { type: ADD_ENTRY, payload: { title, amount } };
};

export const removeEntries = (id) => {
  return { type: REMOVE_ENTRY, payload: { id } };
};

export const updateEntries = (id, title, amount) => {
  return { type: UPDATE_ENTRY, payload: { id, title, amount } };
};
