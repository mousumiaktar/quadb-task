import React from 'react';

const Items = ({item}) => {
    const {image,name,language} = item.show;
    return (
        <div>
            <img className='md:h-[250px] md:w-[150]' src={image?.medium} alt="" />
            <h4 className='text-xl font-bold'>{name}</h4>
            <p><span className='font-bold'>Language:</span> {language}</p>
            <button className='bg-blue-500 text-white px-2 mt-2 rounded-sm hover:bg-blue-700 duration-150'>View More</button>
        </div>
    );
};

export default Items;