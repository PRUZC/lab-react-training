function IdCard({ className, lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className={`border border-2 border-dark p-2 d-flex ${className}`}>
      <img className="me-2" src={picture} alt={firstName} />
      <ul className="list-unstyled">
        <li><strong>First name:</strong> {firstName}</li>
        <li><strong>Lst name:</strong> {lastName}</li>
        <li><strong>Gender:</strong> {gender}</li>
        <li><strong>Height:</strong> {height}</li>
        <li><strong>Birth:</strong> {birth.toDateString()}</li>
      </ul>
    </div>

  );
}


export default IdCard;