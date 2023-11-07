
import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";
import "./index.css";


export default function NearbyAttractions({
 list
 
}){
   return( <Box className="nearby-atractions" shadow={true}>
         <Heading>Пам'ятки поблизу:</Heading>
         <div className="attraction__block">
         {list.map(({id,...rest})=>(<Fragment key={id}>
            <Item {...rest} />
            </Fragment>))  }
           
      </div>
</Box>);
}

function Item({name,link}){
   return  <a className="attraction" href={link}>{name}</a>
     }