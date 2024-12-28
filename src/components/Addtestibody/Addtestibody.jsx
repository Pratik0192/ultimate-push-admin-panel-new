import {React, useState } from 'react'
import './Addtestibody.scss'
import { useDispatch, useSelector } from 'react-redux';
import { createTestimonial } from '../../store/testimonialSlice';

const Addtestibody = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.testimonials);

  const [formData, setFormData] = useState({
    img: '',
    clientImg: '',
    name: '',
    company: '',
    content: '',
    categories: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    const categories = value.split(',').map(item => parseInt(item.trim()));
    setFormData({
      ...formData,
      categories,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createTestimonial(formData)).unwrap();
      alert("Testimonial added sucessfully");

      setFormData({
        img: "",
        clientImg: "",
        name: "",
        company: "",
        categories: [],
      });
    } catch (error) {
      console.error("error while adding:", error);
      alert("failed to add");
    }
  };

  return (
    <div className="add-testimonial-body">
      <h2>Add Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="img">Testimonial Image Path</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleInputChange}
            placeholder="Enter testimonial image path"
          />
        </div>

        <div className="form-group">
          <label htmlFor="clientImg">Client Image Path</label>
          <input
            type="text"
            id="clientImg"
            name="clientImg"
            value={formData.clientImg}
            onChange={handleInputChange}
            placeholder="Enter client image path"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Client Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter client name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Client's Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Enter client's company"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Testimonial Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Enter testimonial content"
          />
        </div>

        <div className="form-group">
          <label htmlFor="categories">Categories (Comma Separated)</label>
          <input
            type="text"
            id="categories"
            name="categories"
            value={formData.categories.join(', ')}
            onChange={handleCategoryChange}
            placeholder="Enter categories (e.g., 1, 3, 5)"
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default Addtestibody