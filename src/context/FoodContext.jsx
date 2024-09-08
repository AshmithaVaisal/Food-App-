import axios from "axios";
import { createContext, useState} from "react";

export const FoodContext = createContext()
export const FoodContextProvider = ({children}) =>{
    

    const [cardData,setCardData]=useState([])
    

    const getCardListData = async() => {
        const {data} = await axios.get("http://localhost:3001/menu")
        setCardData(data)
    }
    

    return(
        <FoodContext.Provider value={{cardData,getCardListData}}>
            {children}
        </FoodContext.Provider>
    )
}

