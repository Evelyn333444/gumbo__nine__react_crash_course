import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Rating = ({ rating = 0 }) => {
    const safeRating = Number.isFinite(rating) ? rating : 0;
    const fullStars = Math.max(0, Math.floor(safeRating));
    const hasHalfStar = !Number.isInteger(safeRating);

    return (
        <div className="book__ratings">
            {new Array(fullStars).fill(0).map((_, index) => (
                <FontAwesomeIcon icon="star" key={index} />
            ))}
            {hasHalfStar && <FontAwesomeIcon icon="star-half-alt" />}
        </div>
    )
}

export default Rating;