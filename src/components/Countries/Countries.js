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

  return (
    <div className="grid">
      {
        countries.map((country) => (
          <Link to={`/countries/${country.name.common}`} key={country.name.common}>
            <div className="country_card_container">
              <div className="flag__section">
                <img src={country.flags.svg} alt="" />
              </div>

              <div className="country_info">
                <h2>{country.name.common}</h2>
                <h3>
                  Capital:
                  <span>{country.capital}</span>
                </h3>
                <h3>
                  Region:
                  <span>{country.region}</span>
                </h3>
                <h3>
                  Population:
                  <span>{country.population}</span>
                </h3>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  );
};

export default Countries;
