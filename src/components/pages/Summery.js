// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useItems from '../hooks/useItems';

// const Summery = ({item}) => {
//     console.log(item);
//     const { name, language } = item.show.id;
    
//     const [items] = useItems();
//     const { itemId } = useParams();
//     const [itemSummery, setItemSummery] = useState({});
//     useEffect(() => {
//         const url = `https://api.tvmaze.com/search/shows/${itemId}`

//             fetch(url)
//             .then(res => res.json())
//             .then(data => console.log(data));

//     }, [itemId]);

//     return (
//         <div>
//             <h3>{name}</h3>
//             <h3>{language}</h3>
//         </div>
//     );
// };

// export default Summery;