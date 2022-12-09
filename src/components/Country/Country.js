import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/country.css';
import { fetchAsyncCountryDetail, getSelectedCountry } from '../../redux/reducer';

const Country = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncCountryDetail(name));
  }, []);

  const countryData = useSelector(getSelectedCountry);
  return (
    <>
      {
        countryData && (
        <div className="countryCard">
          <Link to="/">
            <button type="button" className="back-button">
              {' '}
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {' '}
              Go Back
            </button>
          </Link>

          <div className="country">
            <div className="country__flag">
              <img src={countryData[0]?.flags?.svg} alt="" />
            </div>

            <div className="country__details">
              <div className="country-data-container">
                <div className="country-data">
                  <h1>{countryData[0]?.name.common}</h1>
                  <h3>
                    Capital:
                    <span>
                      {countryData[0]?.capital[0]}
                    </span>
                  </h3>
                  <h3>
                    Region:
                    <span>
                      {countryData[0]?.region}
                    </span>
                  </h3>
                  <h3>
                    Population:
                    <span>
                      {countryData[0]?.population}
                    </span>
                  </h3>
                  <h3>
                    SubRegion:
                    <span>
                      {countryData[0]?.subregion}
                    </span>
                  </h3>
                  <h3>
                    Continent:
                    <span>
                      {countryData[0]?.continents[0]}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </>
  );
};

export default Country;
