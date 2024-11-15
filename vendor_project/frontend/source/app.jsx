import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Addvendor from '../components/Addvendor';
import Getvendor from '../components/Getvendor';
import Editvendor from '../components/Editvendor';
import axios from 'axios';

function App() {
  const [vendor, setvendor] = useState([]);

 
  useEffect(() => {
    const fetchvendor = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/vendor/');
        setvendor(response.data);
      } catch (error) {
        console.error('Error fetching vendor:', error);
      }
    };
    fetchvendor();
  }, []);

  const handleAddvendor = (newvendor) => {
    setvendor([...vendor, newvendor]);
  };

  const handleUpdatevendor = (updatedvendor) => {
    const updatedvendor = vendor.map((vendor) =>
      vendor._id === updatedvendor._id ? updatedvendor : vendor
    );
    setvendor(updatedvendor);
  };

  const handleDeletevendor = async (vendorId) => {
    try {
   
      await axios.delete(`http://localhost:3000/api/vendor/${vendorId}`);

      setvendor(vendor.filter((vendor) => vendor._id !== vendorId));
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };

  return (
    <Router>
      <div className="container">
        <h1>vendor Management</h1>
        <nav>
          <Link to="/">vendor List</Link> | <Link to="/add-vendor">Add vendor</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Getvendor vendor={vendor} onDeletevendor={handleDeletevendor} />} />
          <Route path="/add-vendor" element={<Addvendor onAddvendor={handleAddvendor} />} />
          <Route path="/edit-vendor/:id" element={<Editvendor vendor={vendor} onUpdatevendor={handleUpdatevendor} />} />
          <Route path="/delete-vendor/:id" element={<Editvendor vendor={vendor} onUpdatevendor={handleUpdatevendor} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;