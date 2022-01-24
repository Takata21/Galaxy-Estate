import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  PropertiesRentActions,
  PropertiesSaleActions,
} from '../actions/PropertiesActions';
import { initialState, DataReducer } from '../reducer/PropertiesReducer';
import { API_URL, fetchProperties } from '../../api/fetchData';

export const PropertiesContext = createContext(initialState);

export const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const loadPropertiesForRent = async (url) => {
    dispatch({ type: PropertiesRentActions.FETCH_DATA_REQUEST });

    try {
      const res = await fetchProperties(url);
      if (res.data) {
        dispatch({
          type: PropertiesRentActions.FETCH_DATA_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: PropertiesRentActions.FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };

  const loadPropertiesForSale = async (url) => {
    dispatch({ type: PropertiesSaleActions.FETCH_DATA_REQUEST });
    try {
      const res = await fetchProperties(url);
      if (res.data) {
        dispatch({
          type: PropertiesSaleActions.FETCH_DATA_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: PropertiesSaleActions.FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
  useEffect(() => {
    loadPropertiesForRent(
      `${API_URL}//properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`
    );
    loadPropertiesForSale(
      `${API_URL}//properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`
    );
  }, []);

  return (
    <PropertiesContext.Provider value={{ ...state }}>
      {children}
    </PropertiesContext.Provider>
  );
};
