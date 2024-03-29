const initOrder = {
  order: [],
  inProgress: [],
  pastOrder: [],
};

export const orderReducer = (state = initOrder, action) => {
  if (action.type === 'SET_ORDER') {
    return {
      ...state,
      order: action.value,
    };
  }
  if (action.type === 'SET_IN_PROGRESS') {
    return {
      ...state,
      inProgress: action.value,
    };
  }
  if (action.type === 'SET_PAST_ORDER') {
    return {
      ...state,
      pastOrder: action.value,
    };
  }
  return state;
};
