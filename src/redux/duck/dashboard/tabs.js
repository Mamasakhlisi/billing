export const setTab = (item) => {
  console.log(item);
  return function (dispatch, getState) {
    console.log(getState().tabs.items);
    dispatch({
      type: "SET_TAB",
      payload: item,
    });
  };
};

export const setActive = (item) => {
  return function (dispatch, getState) {
    console.log(getState().tabs.items);
    dispatch({
      type: "SET_ACTIVE",
      payload: item,
    });
  };
};

export const removeActiveTab = () => {
  return function (dispatch) {
    dispatch({
      type: "REMOVE_ACTIVE_TAB",
    });
  };
};
export const removeTab = (id) => {
  return function (dispatch) {
    dispatch({
      type: "REMOVE_TAB",
      payload: id,
    });
  };
};

const initialState = {
  items: [],
  activeItem: {},
  active: false,
};

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TAB":
      return {
        ...state,
        activeItem: action.payload,
        items: state?.items?.find((it) => it.key === action.payload.key)
          ? state.items
          : [...state.items, action.payload],
      };
      break;
    case "SET_ACTIVE":
      return { ...state, activeItem: action.payload };
    case "REMOVE_TAB":
      return {
        ...state,
        active: false,
        activeItem: {},
        items: state.items.filter((item) => item.key !== action.payload),
      };
      break;
    case "REMOVE_ACTIVE_TAB":
      return { ...state, active: false, activeItem: {} };
      break;
    default:
      return state;
  }
};
