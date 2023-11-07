import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";



export default function AddProperties({
   house_rules,
   cancellation_policy,
   local_transportation,
   host_languages,
   special_offers,
   checkin_instr

}){
   return( <Box className="add-properties" shadow={true}>
         <Heading>Додаткові властивості:</Heading>
         <ul>
            <ListItem> 
               < dev className="add-properties__item">
               <h3 className="add-properties__title">Правила дому</h3>
              <span className="add-properties__content">{house_rules}</span>
              </dev>
          </ListItem>
            <ListItem>
               <dev className="add-properties__item">
                  <h3 className="add-properties__title">Політика скасування</h3>
               <span className="add-properties__content">{cancellation_policy}</span> 
            </dev>
          </ListItem>
           <ListItem>
            <dev className="add-properties__item">
               <h3 className="add-properties__title">Місцевий транспорт</h3>
             <span className="add-properties__content">{local_transportation}</span>
            </dev>
            </ListItem>
          <ListItem> 
            <dev className="add-properties__item">
               <h3 className="add-properties__title">Мови хоста</h3>
                <span className="add-properties__content">{host_languages}</span>
           </dev>
            </ListItem>
            <ListItem>
            <dev className="add-properties__item">
               <h3 className="add-properties__title">Спеціальні пропозиції:</h3>
                <span className="add-properties__content">{special_offers}</span>
           </dev>
            </ListItem>
            <ListItem> 
               <dev className="add-properties__item">
                <h3 className="add-properties__title">Інструкції щодо реєстрації</h3>
                <span className="add-properties__content">{checkin_instr}</span>
           </dev>
            </ListItem>
            
            
      </ul>
</Box>);
}

function IfIsTrue({value}){
   
   if({value}){return (<span>+</span>)}else{ return (<span>-</span>)};
}