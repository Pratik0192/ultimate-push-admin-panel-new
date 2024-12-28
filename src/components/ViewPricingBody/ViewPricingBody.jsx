import React, { useEffect } from "react";
import "./ViewPricingBody.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePricingOption, fetchPricingOptions } from "../../store/pricingSlice";

// const pricingOptions = [
//   {
//     name: "Basic Plan",
//     price: "Rs.999/month",
//     features: ["1 website", "500 Subscribers", "3 campaigns / month", "500 notifications / month"],
//   },
//   {
//     name: "Pro Plan",
//     price: "Rs.2999/month",
//     features: [
//       "5 websites",
//       "Unlimited Subscribers",
//       "10 campaigns / month",
//       "Unlimited notifications / month",
//       "No Ads",
//       "Custom Branding",
//     ],
//   },
//   {
//     name: "Premium Plan",
//     price: "Rs.9999/month",
//     features: [
//       "20 websites",
//       "Unlimited Subscribers",
//       "20 campaigns / month",
//       "Unlimited notifications / month",
//       "No Ads",
//       "Custom Branding",
//     ],
//   },
// ];

const ViewPricingBody = () => {

  const dispatch = useDispatch();
  const { data: pricingOptions, loading } = useSelector((state) => state.pricing);

  useEffect(() => {
    dispatch(fetchPricingOptions());
  }, [dispatch]);

  const handleDelete = (pricingId) => {
    dispatch(deletePricingOption(pricingId));
  }

  return (
    <div className="pricing-container">
      {loading ? 
        (
          <div class="loader">
            <div class="loader_cube loader_cube--color"></div>
            <div class="loader_cube loader_cube--glowing"></div>
          </div>
        )
        :
        (
          <>
            <div className="header">
              <h2>Pricing Plans</h2>
              <Link to='/addpricing'>
                <button className="add-pricing-btn">Add New Pricing</button>
              </Link>
            </div>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Plan Name</th>
                  <th>Price</th>
                  <th>Features</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pricingOptions.map((plan, index) => (
                  <tr key={index}>
                    <td>{plan.name}</td>
                    <td>{plan.price}</td>
                    <td>
                      <ul>
                        {plan.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(plan._id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
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

export default ViewPricingBody;
