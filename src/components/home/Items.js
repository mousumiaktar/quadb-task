// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import useItems from '../hooks/useItems';
// import Summery from '../pages/Summery';

// const Items = ({ item }) => {
//     const [items] = useItems()
//     const { image, name, language, id } = item.show;



//     const navigate = useNavigate();
//     const navigateSummery = id => {
//         const result = items.filter(item => {
//             return (
//                 item.show.id === id
//             )
//         })
//         if (result) {
//             navigate(`/summery/${id}`);
//         }

//     }

//     return (
//         <>
//             <div>
//                 <img className='md:h-[250px] md:w-[150]' src={image?.medium} alt="" />
//                 <h4 className='text-xl font-bold'>{name}</h4>
//                 <p><span className='font-bold'>Language:</span> {language}</p>
//                 <button onClick={() => navigateSummery(id)} className='bg-blue-500 text-white px-2 mt-2 rounded-sm hover:bg-blue-700 duration-150'>View More</button>
//             </div>
//             <Summery
//                 item={item}
//             />
//         </>
//     );
// };

// export default Items;