// import React, { useState, useEffect } from 'react';

// function ShowDetailsScreen(props) {
//   const [show, setShow] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.tvmaze.com/shows/${props.match.params.id}`)
//       .then(response => response.json())
//       .then(data => setShow(data));
//   }, [props.match.params.id]);

//   if (!show) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{show?.name}</h1>
//       <p>{show?.summary}</p>
//     </div>
//   );
// }

// export default ShowDetailsScreen;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    };
    fetchShow();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
    </div>
  );
}

export default ShowDetails;