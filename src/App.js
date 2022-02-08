import React from "react"
import './component/IdCard.css';
import IdCard from "./component/IdCard";
import Greetings from './component/Greetings/Greetings';
import Random from './component/random/random';
import CreditCard from './component/credit-card/credit-card';
import Rating from './component/rating/rating';
import DriverCard from './component/driver-card/driver-card';

function App() {
  return (
    <div className="container py-3">
  <IdCard
  className="mb-2"
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  className="mb-2"
  lastName='Dolores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
    
    
        <Greetings lang="de" className="mb-2">Ludwig</Greetings>
        <Greetings lang="es" className="mb-2">Ludwig</Greetings>
        <Greetings lang="en" className="mb-2">François</Greetings>
      

    <Random className="mb-2" min={1} max={6}/>
    <Random className="mb-2" min={1} max={6}/>


    <div className="d-flex justify-content-between">
          <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
        </div>



        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

 <div className="pt-5">
<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
</div>


</div>
);

}

export default App;