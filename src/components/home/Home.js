import React from 'react';
import useItems from '../hooks/useItems';
import Items from './Items';

const Home = () => {
    const [items, setItems] = useItems();
    console.log(items);
    return (
        <div>
            {
                items?.map(item =><Items
                key={item.show.id}
                item={item}
                >
                </Items>)
            }
        </div>
    );
};

export default Home;