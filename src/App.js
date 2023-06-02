import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Summery from './components/pages/Summery';
import HomeScreen from './pages/HomeScreen';
import ShowDetails from './pages/ShowDetails';

function App() {
  return (
    // <div>
    //   <Routes>
    //     <Route path='/' element={<Home />}></Route>
    //     <Route path='/home' element={<Home />}></Route>
    //     <Route path='/summery/:itemId' element={<Summery />}></Route>
    //   </Routes>
    // </div>

    <div>
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/homescreen' element={<HomeScreen />}></Route>
        <Route path='/shows/:id' element={<ShowDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';

// function App() {
//   const [shows, setShows] = useState([]);

//   useEffect(() => {
//     fetch('https://api.tvmaze.com/search/shows?q=all')
//       .then(response => response.json())
//       .then(data => setShows(data))
//       .catch(error => console.error(error))
//   }, []);

//   const [summary, setSummary] = useState('');

//   const handleClick = (showId) => {
//     fetch(`https://api.tvmaze.com/shows/${showId}`)
//       .then(response => response.json())
//       .then(data => setSummary(data.summary))
//       .catch(error => console.error(error))
//   }

//   return (
//     <div className="App">
//       {shows.map(show => (
//         <div key={show.show.id}>
//           <h2>{show.show.name}</h2>
//           <img src={show.show.image?.medium} alt={show.show.name} />
//           <p>{show.show.summary}</p>
//           <button onClick={() => handleClick(show.show.id)}>Read More</button>
//         </div>
//       ))}
//       {summary && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setSummary('')}>&times;</span>
//             <p>{summary}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
