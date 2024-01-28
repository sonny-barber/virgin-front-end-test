import React from 'react';
import styles from './filters.module.scss';

const Filters = ({
  priceRanges,
  priceFilters,
  handlePriceChange,
  ratings,
  onChange,
  hotelFacilities,
  onFacilityChange,
  selectedFacilities,
}) => {
  return (
    <div className={styles.filtersContainer}>
      <h3>Filter results by...</h3>

      <div className={styles.filterType}>
        <label>
          <h4>Star Rating Filter</h4>
        </label>
        {ratings.map((rating) => (
          <div className={styles.filterInputEl} key={rating}>
            <input
              type="checkbox"
              value={rating}
              onChange={(e) => onChange(e.target.checked, rating)}
            />
            <label>{`${rating} stars`}</label>
          </div>
        ))}
      </div>

      <div className={styles.filterType}>
        <label>
          <h4>Price (PP)</h4>
        </label>
        {priceRanges.map((range) => (
          <div className={styles.filterInputEl} key={range.label}>
            <input
              type="checkbox"
              id={`filter-${range.min}-${range.max}`}
              checked={priceFilters.includes(range.max)}
              onChange={() => handlePriceChange(range.max)}
            />
            <label htmlFor={`filter-${range.min}-${range.max}`}>{range.label}</label>
          </div>
        ))}
      </div>

      <div className={styles.filterType}>
        <label>
          <h4>Hotel Facilities</h4>
        </label>
        {hotelFacilities.map((facility) => (
          <div className={styles.filterInputEl} key={facility}>
              <input
                type="checkbox"
                checked={selectedFacilities.includes(facility)}
                onChange={(e) => onFacilityChange(e.target.checked, facility)}
              />
              <label>{facility}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
