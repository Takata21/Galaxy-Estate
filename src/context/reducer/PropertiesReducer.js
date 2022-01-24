import {
  PropertiesRentActions,
  PropertiesSaleActions,
} from '../actions/PropertiesActions';
export const initialState = {
  propertiesForSale: [],
  propertiesForRent: [],
  errorMessage: null,
  isLoading: false,
};
export const DataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PropertiesRentActions.FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PropertiesRentActions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        propertiesForRent: payload[1],
        propertiesForSale: payload[0],
        // isLoading: false,
      };
    case PropertiesRentActions.FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };
    // case PropertiesSaleActions.FETCH_DATA_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case PropertiesSaleActions.FETCH_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     propertiesForSale: payload,
    //   };
    // case PropertiesSaleActions.FETCH_DATA_FAILURE:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     errorMessage: payload,
    //   };
    default:
      return state;
  }
};
