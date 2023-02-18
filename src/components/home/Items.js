import React from 'react';

const Items = ({item}) => {
    const {image,name,language,rating,genres,premiered} = item.show;
    return (
        <div>
            <img src={image?.medium} alt="" />
            <h4>{name}</h4>
            <p>{language}</p>
            <p>{rating.average}</p>
            <p>{genres}</p>
            <p>{premiered}</p>
            <button>View More</button>
        </div>
    );
};

export default Items;