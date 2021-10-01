import axios from 'axios'
export const fetchData = () => {
    return function (dispatch) {
        axios.get("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json").then((res) => dispatch({type: "GET_DATA", usd:res.data[0].currencies[40],eur:res.data[0].currencies[13] }))
    };
  };

  const initialState = {
    usd: 0,
    eur: 0
  };

  export const exchangeRateReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_DATA":
        return { ...state, usd: action.usd,eur:action.eur};
      default:
        return state;
    }
  };
  