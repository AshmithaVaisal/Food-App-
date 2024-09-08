import { useContext, useEffect } from "react"
import { CardListTitle } from "./CardListTitle"
import { ProductFiltering } from "./ProductFiltering"
import { SingleFoodCard } from "./SingleFoodCard"
import { FoodContext } from "../context/foodContext"

export const CardList = () => {

    const {cardData,getCardListData} = useContext(FoodContext)
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("useEffect triggered");

        getCardListData(); // Fetch data when the component mounts
    }, []);
  
    return(
        <>  
            <CardListTitle />
            <ProductFiltering />
            <div className="flex flex-wrap p-10">
               {cardData.map(item =>(
                <SingleFoodCard key={item.id} food={item}/>
               ))}
            
            </div>
            
        </>
    )
}