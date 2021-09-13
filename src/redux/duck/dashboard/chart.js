export const fetchData = () => {
  return function (dispatch) {
    dispatch({
      type: "RECEIVED",
      payload: [
        { id: 1, title: "მიღებული დოკუმენტები", value: 35 },
        { id: 2, title: "წაუკითხავი", value: 0 },
      ],
    });
  };
};

export const fetchDataPast = () => {
  return function (dispatch) {
    dispatch({
      type: "PAST",
      payload: [
        { id: 1, title: "ყველა", value: 270 },
        { id: 2, title: "წაუკითხავი", value: 0 },
        { id: 3, title: "ვიზირებული", value: 269 },
        { id: 4, title: "მოლოდინში", value: 1 },
        { id: 5, title: "გაუქმებული", value: 0 },
        { id: 6, title: "დრაფტი", value: 0 },
      ],
    });
  };
};

const initialState = {
  type: "RECEIVED",
  data: [],
  active: 1,
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVED":
      return { ...state, data: action.payload, type: action.type };
    case "PAST":
      return { ...state, data: action.payload, type: action.type };
    default:
      return state;
  }
};
