import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import svg1 from "./svg1.svg"
import svg2 from "./svg2.svg"
import svg3 from "./svg3.svg"
import svg4 from "./svg4.svg"
import svg5 from "./svg5.svg"
import svg6 from "./svg6.svg"
import svg7 from "./svg7.svg"
import svg8 from "./svg8.svg"
import svg9 from "./svg9.svg"
import svg10 from "./svg10.svg"

export default function Amenities({
   hasPool,
   hasGym,
   hasFreeBreakfast,
   hasFreeWiFi,
   hasParking,
   hasPetsAllowed,
   hasAirportShuttle,
   hasConciergeService,
   hasRoomService,
   hasChildFriendly,
}){
   return( <Box className="amenities" shadow={true}>
         <Heading>Зручності:</Heading>
         <Heading>{hasAirportShuttle}</Heading>
         <ul>
            <ListItem imageSrc={svg1} >
              <span>Басейн {hasPool}</span>
              <IfIsTrue value={hasPool} />
          </ListItem>
            <ListItem imageSrc={svg2}>
               <span>Спортивний зал</span> 
               <IfIsTrue value={hasGym} />
          </ListItem>
           <ListItem imageSrc={svg3}>
             <span>Безкоштовний сніданок</span>
             <IfIsTrue value={hasFreeBreakfast} />
            </ListItem>
          <ListItem imageSrc={svg4}>
           <span>Безкоштовний Wi-Fi{hasFreeWiFi}</span>
           <IfIsTrue value={hasFreeWiFi} />
            </ListItem>
            <ListItem imageSrc={svg5}>
           <span>Безкоштовний вуличний паркінг{hasParking}</span>
           <IfIsTrue value={hasParking} />
            </ListItem>
            <ListItem imageSrc={svg6}>
           <span>Дозволено розміщення з домашніми тваринами</span>
           <IfIsTrue value={hasPetsAllowed} /> 
            </ListItem>
            <ListItem imageSrc={svg7}>
           <span>Трансфер до/з аеропорту</span>
           <IfIsTrue value={hasAirportShuttle} /> 
            </ListItem>
            <ListItem imageSrc={svg8}>
           <span>Консьєрж-сервіс</span>
           <IfIsTrue value={hasConciergeService} /> 
            </ListItem>
            <ListItem imageSrc={svg9}>
           <span>Обслуговування номерів</span>
           <IfIsTrue value={hasRoomService} /> 
            </ListItem>
            <ListItem imageSrc={svg10}>
           <span>Підходить для дітей</span>
           <IfIsTrue value={hasChildFriendly} /> 
            </ListItem>
            
      </ul>
</Box>);
}

function IfIsTrue(value){
   
   if({value}){return (<span>+</span>)}else{ return (<span>-</span>)};
}