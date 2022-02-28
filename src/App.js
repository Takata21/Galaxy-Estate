import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import PropertyDetails from './pages/PropertyDetails';
import { fetchProperties, API_URL } from './api/fetchData';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { data } from './data';
import Properties from './pages/Properties';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [forSale, setForSale] = useState([]);
  const [forRent, setForRent] = useState([]);
  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = async () => {
    setIsLoading(true);
    // const propertyForSale = await fetchProperties(
    //   `${API_URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
    // );
    // const propertyForRent = await fetchProperties(
    //   `${API_URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
    // );
    // setForRent(propertyForRent.data.hits);
    // setForSale(propertyForSale.data.hits);
    setForRent(data.hits);
    setForSale(data.hits);
    // console.log(propertyForSale.data.hits);
    setIsLoading(false);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home forRent={forRent} forSale={forSale} isLoading={isLoading} />
            }
          />
          <Route path="/property-details/:id" element={<PropertyDetails />} />
          <Route path="/search/:purpose" element={<Search />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
