import React from 'react';
import { Link } from 'react-router-dom';

function Getvendor({ vendor, onDeletevendor }) {
  return (
    <div>
      <ul style={{ textAlign: 'justify' }}>
        {vendor.map((vendor) => (
          <li key={vendor._id}>
            <strong>Name:</strong> {vendor.vendor_name} <span></span>
            <strong>Location:</strong> {vendor.vendor_location} <span></span>
            <strong>Skills:</strong> {vendor.vendor_skills} <span></span>
            <strong>Phone:</strong> {vendor.vendor_phone} <span></span>
            <Link to={`/edit-vendor/${vendor._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => onDelete(vendor._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Getvendor;