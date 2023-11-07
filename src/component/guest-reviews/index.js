import { Fragment } from "react";

import Heading from "../heading";
import Box from "../box";
import "./index.css";


export default function ReveiwList({list})
{
   return( 
      <div className="review__block">
         <Heading>Відгуки клієнтів</Heading>
         <div className="guests__list">
            {list.map(({id,...rest})=>(<Fragment key={id}>
            <Item {...rest} />
            </Fragment>))  }
         </div>
      
      </div>
      );
}
 
function Item({guestName,rating,review}){
return ( <Box className="guest" >
  <div>
   <span className="guest__name">{guestName}</span>
   <span className="guest__info">Рейтинг:{rating}</span>
</div>
   <p className="guest__review"> {review}</p>
  
</Box>

);
}
