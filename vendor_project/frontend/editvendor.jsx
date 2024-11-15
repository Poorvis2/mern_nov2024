import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Editvendor({ vendor, onUpdatevendor }) {
  const { id } = useParams(); 
  const navigate = useNavigate();
  console.log("vendor ID from URL: ", id);
  console.log("vendor List: ", vendor);
  
  const vendor = vendor.find((vendor) => vendor._id === parseInt(id));

  if (!vendor) {
    return <div>vendor not found!</div>;
  }

  const [vendorName, setvendorName] = useState(vendor.vendor_name);
  const [vendorLocation, setvendorLocation] = useState(vendor.vendor_location);
  const [vendorSkills, setvendorSkills] = useState(vendor.vendor_skills);
  const [vendorPhone, setvendorPhone] = useState(vendor.vendor_phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedvendor = {
      _id: vendor._id, 
      vendor_name: vendorName,
      vendor_location: vendorLocation,
      vendor_skills: vendorSkills,
    vendor_phone: vendorPhone,
    };

    onUpdatevendor(updatedvendor);

    // Redirect back to the list page after the update
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit vendor</h2>
      <div>
        <label>vendor Name:</label>
        <input
          type="text"
          value={vendorName}
          onChange={(e) => setvendorName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>vendor Location:</label>
        <input
          type="text"
          value={vendorLocation}
          onChange={(e) => setvendorLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>vendor Skills:</label>
        <input
          type="text"
          value={vendorSkills}
          onChange={(e) => setvendorSkills(e.target.value)}
          required
        />
      </div>
      <div>
        <label>vendor Phone:</label>
        <input
          type="tel"
          value={vendorPhone}
          onChange={(e) => setvendorPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update vendor</button>
    </form>
  );
}

export default Editvendor;


//npm install react-router-dom