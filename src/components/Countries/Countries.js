import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries, fetchAsyncCountries } from '../../redux/reducer';
import '../../styles/countries.css';

const Countries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCountries());
  }, []);

  const countries = useSelector(getAllCountries);

  const myStyle = {
    maxWidth: '540px',
  };

  return (
    <div className="grid">
      {
        countries.map((country) => (
          <Link to={`/countries/${country.name.common}`} key={country.name.common}>

            <div className="card mb-3 cards-container" style={myStyle}>
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img src={country.flags.svg} alt="" className="img-fluid rounded-start flag" />
                </div>
                <div className="col-md-8">
                  <div className="card-body details">
                    <button type="button" className="btn btn-primary">
                      <h5 className="card-title text">
                        <span className="bold">Name:</span>
                        {country.name.common}
                      </h5>
                    </button>

                    <button type="button" className="btn btn-info region-btn">
                      <p className="card-text text">
                        <span className="bold">Region:</span>
                        {country.region}
                      </p>
                    </button>
                    <button type="button" className="btn btn-warning pop-btn">
                      <p className="card-text text">
                        <span className="bold">Population:</span>
                        {country.population}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  );
};

export default Countries;
