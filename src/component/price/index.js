import "./index.css";
import Box from "../box";
import ListItem from "../list-item";


export default function Price({
   original_price,
   discounted_price,
   currency,
   ...rest
}){
   return( <Box className="price">
      <div className="price__header">
         <span 
         className={`price__value ${discounted_price ?"price__value--has-discount":""}`}
         >{currency}{original_price}</span>
      {discounted_price &&(<span className="price__value">
         {currency}{discounted_price}
      </span>)}
      </div>
     <List {...rest} currency={currency}/>
      </Box>);
}

function List({ currency,
   cleaning_fee=0,
   service_fee=0,
   checkin_date,
   checkout_date,
}){
   return( <ul className="price__sub-block">
   <ListItem >
      <span >Плата за прибирання:</span>
      <span> {currency} {cleaning_fee}</span>
   </ListItem>
<ListItem>
<span className="price__sub-value">Сервісний збір:</span>
<span> {currency}{service_fee}</span>
   
</ListItem>
<ListItem>
<span className="price__sub-value">Дата прибуття: </span>
<span>{checkin_date}</span>
</ListItem>
<ListItem>
<span className="price__sub-value">Дата від’їзду:</span>
<span> {checkout_date}</span>
</ListItem>
   
</ul>);
}
   
   