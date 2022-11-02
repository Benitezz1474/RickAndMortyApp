// import Card from "./Card";
// import Card from "./Card";
import {Card,Pagination} from "./index";


import useRickAndMorty from "../Hooks/useRickAndMorty";
import useCounter from "../Hooks/useCounter";

export const AddCategory=()=>{

    const {counter,nextPage,backPage} = useCounter()
    const {character, load} = useRickAndMorty(counter)
 
    if(load){
     return <div>
     <div className="cardContent">
     <Card character = {character} />
     </div>

      <Pagination nextPage = {nextPage} backPage = {backPage} counter = {counter}/>
      </div>
    }
  }

// export default AddCategory