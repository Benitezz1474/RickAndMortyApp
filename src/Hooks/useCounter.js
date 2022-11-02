import {useState} from "react";

const useCounter=()=>{

    const [counter, setCounter] = useState(1)

    const nextPage=()=> {

        if(counter >= 42) return
        setCounter(counter + 1)

    };
    const backPage=()=> {

        if(counter <= 1) return
        setCounter(counter - 1)
    };
    

    return{
        counter,
        nextPage,
        backPage
    }
}

export default useCounter;