import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import svg1 from "./svg1.svg"
import svg2 from "./svg2.svg"
import svg3 from "./svg3.svg"
import svg4 from "./svg4.svg"

export default function Propertyes({
   guests,bedrooms,beds,baths
}){
   return( <Box className="properties">
         <Heading>Деталі властивості:</Heading>
         <ul>
            <ListItem imageSrc={svg1}>
              <span>{guests}</span>
               <span>гості</span>
          </ListItem>
            <ListItem imageSrc={svg2}>
               <span>{bedrooms}</span> 
               <span> спальня</span>
          </ListItem>
           <ListItem imageSrc={svg3}>
             <span>{beds}</span>
               <span> ліжко</span>
            </ListItem>
          <ListItem imageSrc={svg4}>
           <span>{baths}</span>
            <span> гості</span>
            </ListItem>
      </ul>
</Box>);
}