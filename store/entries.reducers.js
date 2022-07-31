const initialValues = {
  entries: [],
  balance: 0,
  incomes: 0,
  expences: 0,
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      const entry = {
        id: state.entries.length + 1,
        title: action.payload.title,
        amount: parseInt(action.payload.amount),
      };
      state.entries = state.entries.concat({ ...entry });
      state.balance = evalueBalance(state.entries);
      state.incomes = evalueIncomes(state.entries);
      state.expences = evalueExpences(state.entries);

      return state;

    case "REMOVE_ENTRY":
      state.entries = state.entries.filter((item) => item.id !== action.payload.id);
      state.balance = evalueBalance(state.entries);
      state.incomes = evalueIncomes(state.entries);
      state.expences = evalueExpences(state.entries);

      return state;

    case "UPDATE_ENTRY":
      let editIndex = state.entries.findIndex((item) => item.id === action.payload.id);
      state.entries[editIndex].title = action.payload.title;
      state.entries[editIndex].amount = parseInt(action.payload.amount);

      state.balance = evalueBalance(state.entries);
      state.incomes = evalueIncomes(state.entries);
      state.expences = evalueExpences(state.entries);

      return state;

    default:
      return state;
  }
};

const evalueBalance = (entries) => {
  return entries.map((item) => item.amount).reduce((a, b) => a + b, 0);
};

const evalueIncomes = (entries) => {
  return entries
    .filter((item) => item.amount > 0)
    .map((item) => item.amount)
    .reduce((a, b) => a + b, 0);
};

const evalueExpences = (entries) => {
  return entries
    .filter((item) => item.amount < 0)
    .map((item) => item.amount)
    .reduce((a, b) => a + b, 0);
};
