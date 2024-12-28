import React, { useEffect } from "react";
import "./ViewFeatureBody.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFeatures, fetchFeatures } from "../../store/featureSlice";

// const featuresData = [
//   {
//     image: "/path/image.jpg",
//     title: "Self-Hosted Solution",
//     description: "You're the boss. Fully customize our solution to suit your business needs.",
//   },
//   {
//     image: "/path/image.jpg",
//     title: "Targeted Delivery",
//     description: "Drive personalized notifications to individual users.",
//   },
//   {
//     image: "/path/image.jpg",
//     title: "Scheduled Notifications",
//     description: "Choose when your audience should receive notifications.",
//   },
// ];

const ViewFeatureBody = () => {  

  const dispatch = useDispatch();
  const { data: featuresData, loading } = useSelector((state) => state.features);

  useEffect(() => {
    dispatch(fetchFeatures());
  }, [dispatch]);

  const handleDelete = (featureId) => {
    dispatch(deleteFeatures(featureId));
  }

  return (
    <div className="features-table-container">
      {loading ? 
        (
          <div className="loader">
            <div className="loader_cube loader_cube--color"></div>
            <div className="loader_cube loader_cube--glowing"></div>
          </div>
        )
        :
        (
          <>
            <div className="header">
              <h2>Features</h2>
              <Link to='/addfeatures'>
                <button className="add-feature-btn">Add New Feature</button>
              </Link>
            </div>
            <table className="features-table">
              <thead>
                <tr>
                  <th>Icon</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {featuresData.map((feature, index) => (
                  <tr key={index}>
                    <td>
                      <img src={feature.image} alt="feature icon" className="feature-icon" />
                    </td>
                    <td>{feature.title}</td>
                    <td>{feature.description}</td>
                    <td>
                      <button onClick={() => handleDelete(feature._id)} className="delete-btn">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      }
    </div>
  );
};

export default ViewFeatureBody;
