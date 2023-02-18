import React from 'react';
import useItems from '../hooks/useItems';

const Home = () => {
    const [items, setItems] = useItems();
    console.log(items);
    return (
        <div>
            
        </div>
    );
};

export default Home;