function IdCard(props) {
  return (
    <div className="IdCard">
        <div>
            <img className="m-2" src={props.picture} alt="description" />
        </div>

        <div>
            <span><b>First name: </b> {props.firstName}</span>
            <span><b>Last name: </b> {props.lastName}</span>
            <span><b>Gender: </b> {props.gender}</span>
            <span><b>Height: </b> {props.height}</span>
            <span><b>Birth: </b> {props.birth.toString().slice(3,15)}</span>
        </div>
    </div>
  );
}

export default IdCard;