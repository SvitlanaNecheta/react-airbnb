import Heading from "../heading";
import Box from "../box";

import "./index.css"
import face from "./face.svg"

export default function ContactInfo({
   name,
   response_rate,
   response_time,
   info,
   phone,
}){
   return(<Box className="contact-info">
      <Heading>{name}</Heading>
      <div>
      <img src={face} alt="face" height={80} width={80}></img>
      <div className="contact-info__sub-block">
         <span className="contact-info__sub-value">{phone}</span>
         <span className="contact-info__sub-value">Протягом {response_time}</span>
         <span className="contact-info__sub-value">{response_rate}% відсотків швидкості відгуку</span>
      </div>
      <p>{info}</p>
   
      </div>
   </Box>);}