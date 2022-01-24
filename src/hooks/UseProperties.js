import { useContext } from 'react';
import { PropertiesContext } from '../context/provider/PropertiesContext';
export const useProperties = () => {
  const context = useContext(PropertiesContext);
  return context;
};
