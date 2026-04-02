import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Rating = () => {
    return (
        <div className="book__ratings">
            {<div className="book__ratings">
                {
                    new Array(Math.floor(Rating)).fill(0).map((_, index) =>
                        <FontAwesomeIcon icon="star" key={index} />)
                    //The array only works with whole numbers. If you want to add in a decimal,
                    // you have to use either Math.floor(book.rating) or Math.ceil(book.rating)
                }
                {
                    !Number.isInteger(Rating) &&
                    <FontAwesomeIcon icon="star-half-alt" />
                    //&& is telling VSC that if the left side is true, then the right side runs.
                    //The ! means that if it is not an integer. It makes the statement the opposite.
                }
            </div>}
        </div>
    )
}

export default Rating;