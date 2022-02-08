import Rating from '../rating/rating';
import './driver-card.css'

function DriverCard ({name, img, car, bgColor, rating }) {


    return (
        
        <div className=" driverCard d-flex rounded rounded-3 py-4 mb-3 justify-content-center" style={{backgroundColor: bgColor}}>
            
            <img className="rounded-circle flex-column" src={img} alt="driver"></img>
            <div className='my-4 mx-3 text-white lh-2'>
                <h4 className ="m-0 align-self-center"> {name} </h4>
                <medium><Rating>{rating}</Rating></medium>
                <small className="align-self-center">{car.model} - {car.licensePlate}</small>

            </div>
        </div>
        );   
     }



  
export default DriverCard;
