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
    <div>
      {businesses.map((business) => (
        <div key={business.id}>
          <h1>{business.business_name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Business;
