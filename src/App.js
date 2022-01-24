import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import PropertyDetails from './pages/PropertyDetails';
import { PropertiesProvider } from './context/provider/PropertiesContext';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <PropertiesProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/property-details/:id" element={<PropertyDetails />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </PropertiesProvider>
      </Router>
    </>
  );
}

export default App;
