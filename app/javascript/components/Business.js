import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBusiness, selectBusiness, selectBusinessStatus, selectBusinessError,
} from '../redux/slice/businessSlice';

const Business = () => {
  const dispatch = useDispatch();
  const businesses = useSelector(selectBusiness);
  const status = useSelector(selectBusinessStatus);
  const error = useSelector(selectBusinessError);

  useEffect(() => {
    dispatch(fetchBusiness());
  }, [dispatch]);

  if (status === 'loading') {
    return <div className="loading">Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div className="loading">
        Error: No business found.
        {' '}
        {error}
      </div>
    );
  }

  return (
    <section className="businesses-container">
      {businesses.map((business) => (
        <div className="businesses-sub-container" key={business.id}>
          <img src={business.image_url} alt={business.business_name} />
          <div className="content">
            <span>
              {business.business_name}
            </span>
            <span>
              <img id="loc" src="https://img.icons8.com/ultraviolet/40/marker.png" alt="marker" />
              {business.location}
            </span>
            <p>{business.business_description}</p>
            <a href={`tel:${business.contact}`}>Call us</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Business;
