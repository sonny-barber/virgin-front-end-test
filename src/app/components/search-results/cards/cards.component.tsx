"use client"
import React, { useState } from 'react';
import styles from './cards.module.scss';
import Filters from '../filters/filters.component';
import Card from './card/card.component';

const priceRanges = [
  { min: 0, max: 1160, label: 'up to £1160' },
  { min: 1160, max: 1630, label: '£1160 - £1630' },
  { min: 1630, max: 2440, label: '£1630 - £2440'},
  { min: 2440, max: Infinity, label: 'Over £2440'}
];

const ratings = ['5', '4', '3', '2', '1'];

const hotelFacilities: unknown[] = [];

const Cards = ({ holidays }: { holidays: any[] }) => {
  const [priceFilters, setPriceFilters] = useState<number[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const handlePriceChange = (price: number) => {
    if (priceFilters.includes(price)) {
      setPriceFilters(priceFilters.filter((filter) => filter !== price));
    } else {
      setPriceFilters([...priceFilters, price]);
    }
  };

  const handleRatingChange = (checked: boolean, rating: number) => {
    if (checked) {
      setSelectedRatings((prev) => [...prev, rating]);
    } else {
      setSelectedRatings((prev) => prev.filter((selected) => selected !== rating));
    }
  };

  const handleFacilityChange = (checked: boolean, facility: string) => {
    if (checked) {
      setSelectedFacilities((prev) => [...prev, facility]);
    } else {
      setSelectedFacilities((prev) => prev.filter((selected) => selected !== facility));
    }
  };

  const filterHolidays = (holiday: any) => {
    const priceFilter =
      priceFilters.length === 0 ||
      priceFilters.some((filter) => {
        const range = priceRanges.find((range) => range.max === filter);
        return (
          range &&
          holiday.pricePerPerson >= (range.min ?? 0) &&
          holiday.pricePerPerson <= (range.max ?? Infinity)
        );
      });
  
    const ratingFilter =
      selectedRatings.length === 0 || selectedRatings.includes(holiday.hotel.content.starRating);
  
    const uniqueFacilities = Array.from(new Set(holiday.hotel.content.hotelFacilities));
  
    const facilityFilter =
      selectedFacilities.length === 0 ||
      selectedFacilities.every((facility) => uniqueFacilities.includes(facility));
  
    hotelFacilities.push(...uniqueFacilities.filter((facility) => !hotelFacilities.includes(facility)));
  
    return priceFilter && ratingFilter && facilityFilter;
  };
  
  

  const filteredHolidays = holidays.filter(filterHolidays);

  return (
    <>
      <Filters
        priceRanges={priceRanges}
        priceFilters={priceFilters}
        handlePriceChange={handlePriceChange}
        ratings={ratings}
        onChange={handleRatingChange}
        hotelFacilities={hotelFacilities}
        onFacilityChange={handleFacilityChange}
        selectedFacilities={selectedFacilities}
      />


      <div className={styles.cardContainer}>
        {filteredHolidays.map((holiday, index) => (
          <Card key={index} holiday={holiday} />
        ))}
      </div>  
    </>
  );
};

export default Cards;