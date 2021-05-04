import React from 'react';
const ActorsCAst = ({ actors }) => {
  const actor = actors.map(({ name, profile_path },index) => <li key={index}><img src={"https://image.tmdb.org/t/p/w500/" + profile_path} alt={name}/><p>{name}</p></li>)
  return (
    <>
      {actor}
      </>
   );
}
 
export default ActorsCAst;