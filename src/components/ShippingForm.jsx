import React, { useState } from "react";

const ShippingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const [location, setLocation] = useState("");
  const [shippingCost, setShippingCost] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    calculateShippingCost(e.target.value);
  };

  const calculateShippingCost = (location) => {
    if (location === "Australia") {
      setShippingCost(4.99);
    } else {
      setShippingCost(15.99);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or process payment
    console.log("Form Data Submitted:", formData);
    console.log("Shipping Cost:", shippingCost);
  };

  return (
    <div className="shipping-form">
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Country</option>
          <option value="Australia">Australia</option>
          <option value="International">Outside Australia</option>
        </select>

        <label htmlFor="location">Shipping Location:</label>
        <select
          id="location"
          value={location}
          onChange={handleLocationChange}
          required
        >
          <option value="">Select</option>
          <option value="Australia">Australia</option>
          <option value="International">Outside Australia</option>
        </select>
      </form>
    </div>
  );
};

export default ShippingForm;
