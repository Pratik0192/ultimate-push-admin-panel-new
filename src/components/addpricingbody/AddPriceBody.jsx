import React, { useState } from 'react';
import './AddPriceBody.scss';

const AddPriceBody = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    features: [''],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFeatureChange = (e, index) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = e.target.value;
    setFormData({
      ...formData,
      features: newFeatures,
    });
  };

  const handleAddFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, ''],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="add-price-body">
      <h2>Add Pricing Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Plan Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter plan name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter price"
          />
        </div>

        <div className="form-group">
          <label>Features</label>
          {formData.features.map((feature, index) => (
            <div className="feature-input" key={index}>
              <input
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(e, index)}
                placeholder="Enter feature"
              />
            </div>
          ))}
          <button
            type="button"
            className="add-feature-btn"
            onClick={handleAddFeature}
          >
            Add New Feature
          </button>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddPriceBody;
