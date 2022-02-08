import './credit-card.css'
import visaPhoto from "../../assets/images/visa.png"
import masterPhoto from "../../assets/images/master-card.svg"

    function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
        let cardLogo;
        switch(type) {
            case "Master Card":
                cardLogo = masterPhoto;
                break;
            case "Visa":
                default:
                cardLogo = visaPhoto;
                 
            }
                
        return (
        <div className="credit-card d-flex flex-column rounded rounded-3 p-3" style={{backgroundColor: bgColor, color}}>
            <img className="p-2 align-self-end" src={cardLogo} alt={type}></img> 
            <h4 className="m-0 align-self-center my-1">•••• •••• •••• {number.slice(-4)}</h4>
            <div className="d-flex">
                <small className="me-2">Expires {expirationMonth}/{expirationYear}</small>
                <small>{bank}</small>
            </div>
                <small>{owner}</small>
 
            </div>
        );   
     }


        
    export default CreditCard;