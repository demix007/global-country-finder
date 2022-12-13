import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchedCountryDetail } from '../../redux/reducer';
import '../../styles/filter.css';

const Filter = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedCountryDetail(term));
    setTerm('');
  };

  return (
    <div className="search-container">
      <form className="form__input" onSubmit={submitHandler}>
        <input type="search" name="search" id="search" placeholder="Search for a country" className="search-input" onChange={(e) => setTerm(e.target.value)} value={term} />
        <button type="submit" className="search-btn" aria-label="search-country"><i className="fa-sharp fa-solid fa-magnifying-glass-location" /></button>
      </form>
    </div>
  );
};

export default Filter;
