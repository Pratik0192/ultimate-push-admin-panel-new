import React, { useState } from 'react';
import './AddFeatureBody.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createFeatures } from '../../store/featureSlice';

const AddFeatureBody = () => {
  const [formData, setFormData] = useState({
    svgPath: '',
    title: '',
    description: '',
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.features);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createFeatures(formData)).unwrap();
      alert('Feature created successfully!');

      setFormData({ 
        svgPath: '', 
        title: '', 
        description: '' 
      });
    } catch (error) {
      console.error('cannot create feature:', error);
      alert('Failed to create feature.');
    }
  };

  return (
    <div className="add-feature-body">
      <h2>Add Feature</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image Path</label>
          <input
            type="text"
            id="image"
            name="svgPath"
            value={formData.svgPath}
            onChange={handleInputChange}
            placeholder="Enter image path"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter description"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddFeatureBody;
