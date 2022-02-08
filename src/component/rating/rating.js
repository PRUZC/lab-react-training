
    
    /*function Rating ({children}) { 

    const ratingStars= (children) 
    starArray.fill(starArray, 0, 5);{
  
    for (let i = 0; i < 5; i++) {
      if (i < (Math.round(children))) {
        starArray.push('★');
      } else {
        starArray.push('☆')
      }

    return (
        <div className="Rating d-flex">{starArray}</div>
    ); 
    }
    }
};*/

function Rating ({ children }) {

    const ratingStars = (children) =>
      '★'.repeat(Math.round(children)) + '☆'.repeat(5 - Math.round(children));
    return(
        <div className="Rating d-flex">{ratingStars(children)}
        </div>
    )
  };


  
  export default Rating;
