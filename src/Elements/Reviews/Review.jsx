import React from 'react';
const Review = ({ review }) => {
  const reviews = review.map(({ author, content }, index) => <li key={index}>
    <p>{author}</p>
    <p>{content}</p>
  </li>)
  return (
    <>
      <ul>
        {reviews}
      </ul>
      </>
   );
}
 
export default Review;