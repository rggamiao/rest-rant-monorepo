import React, { useState, useEffect } from 'react';
import { fetchPlaces } from '../api';

function PlaceIndex() {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const data = await fetchPlaces();
        setPlaces(data);
      } catch (err) {
        setError('Failed to fetch places. Please try again later.');
      }
    };

    loadPlaces();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="place-index">
      <h2>Places</h2>
      {places.map(place => (
        <div key={place.id} className="place-item gothic-border">
          <h3>{place.name}</h3>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PlaceIndex;