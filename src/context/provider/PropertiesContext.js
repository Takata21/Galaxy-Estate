import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  PropertiesRentActions,
  PropertiesSaleActions,
} from '../actions/PropertiesActions';
import { initialState, DataReducer } from '../reducer/PropertiesReducer';
import { API_URL, fetchProperties } from '../../api/fetchData';
import { data, data2 } from '../../data';
export const PropertiesContext = createContext(initialState);

export const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const loadProperties = async (RentUrl, SaleUrl) => {
    dispatch({ type: PropertiesRentActions.FETCH_DATA_REQUEST });

    try {
      // const resSale = await fetchProperties(RentUrl);
      // const resRent = await fetchProperties(SaleUrl);
      // if (resSale.data && resRent.data) {
      //   dispatch({
      //     type: PropertiesRentActions.FETCH_DATA_SUCCESS,
      //     payload: [resSale.data.hits, resRent.data.hits],
      //   });
      // }
      dispatch({
        type: PropertiesRentActions.FETCH_DATA_SUCCESS,
        payload: [data.hits, data2.hits],
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: PropertiesRentActions.FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
  useEffect(() => {
    loadProperties(
      `${API_URL}//properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=12`,
      `${API_URL}//properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=12`
    );
  }, []);

  return (
    <PropertiesContext.Provider value={{ ...state }}>
      {children}
    </PropertiesContext.Provider>
  );
};
