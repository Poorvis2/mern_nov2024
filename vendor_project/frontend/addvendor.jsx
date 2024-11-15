import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addvendor({ onAddvendor }) {
  const [vendorName, setvendorName] = useState('');
  const [vendorLocation, setvendorLocation] = useState('');
  const [vendorSkills, setvendorSkills] = useState('');
  const [vendorPhone, setvendorPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newvendor = {
      vendor_name: vendorName,
      vendor_location: vendorLocation,
      vendor_skills: vendorSkills,
      vendor_phone: vendorPhone
    };

    try {
      const response = await axios.post('http://localhost:3000/api/vendor/', newvendor);
      
      if (response.status === 201) {
        onAddvendor(response.data);  // Update the parent component if needed
        setvendorName('');
        setvendorLocation('');
        setvendorSkills('');
        setvendorPhone('');
        navigate('/');
      }
    } catch (error) {
      console.error("Error adding vendor:", error);
      alert("An error occurred while adding the vendor.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add vendor</h2>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor Name:</label>
        <input type="text" className="form-control" value={vendorName} onChange={(e) => setvendorName(e.target.value)} required />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor Location:</label>
        <input type="text" className="form-control" value={vendorLocation} onChange={(e) => setvendorLocation(e.target.value)} required />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor Skills:</label>
        <input type="text" className="form-control" value={vendorSkills} onChange={(e) => setvendorSkills(e.target.value)} required />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor Phone:</label>
        <input type="Number" className="form-control" value={vendorPhone} onChange={(e) => setvendorPhone(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Add vendor</button>
    </form>
  );
}

export default Addvendor;
