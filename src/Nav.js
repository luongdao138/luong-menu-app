import React from 'react';

const Nav = ({ filterMeal }) => {
  return (
    <ul>
      <li>
        <button
          className='meal-btn'
          onClick={() => {
            filterMeal('ALL');
          }}
        >
          All
        </button>
      </li>
      <li>
        <button
          className='meal-btn'
          onClick={() => {
            filterMeal('BREAKFAST');
          }}
        >
          Breakfast
        </button>
      </li>
      <li>
        <button
          className='meal-btn'
          onClick={() => {
            filterMeal('LUNCH');
          }}
        >
          Lunch
        </button>
      </li>
      <li>
        <button
          className='meal-btn'
          onClick={() => {
            filterMeal('SHAKES');
          }}
        >
          Shakes
        </button>
      </li>
    </ul>
  );
};

export default Nav;
