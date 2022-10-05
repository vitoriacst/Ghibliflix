import PropTypes from 'prop-types';
import React from 'react';
import RenderCard from './utils/RenderCard';

const CardSearch = ({ url }) => {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-wrap gap-6 p-6 justify-center">
          {RenderCard(url)}
        </div>
      </div>
    </>
  );
};

CardSearch.propTypes = {
  url: PropTypes.string,
}.isRequired;

export default CardSearch;
