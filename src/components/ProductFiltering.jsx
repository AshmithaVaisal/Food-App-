export const ProductFiltering = () => {
    return (
        <>
            <div className="flex space-x-4 p-4 mx-auto container">
                <button className="border rounded-full px-4 py-2">Filter</button>
                <button className="border rounded-full px-4 py-2">Sort By</button>
                <button className="border rounded-full px-4 py-2">Fast Delivery</button>
                <button className="border rounded-full px-4 py-2">Ratings 4+</button>
                <button className="border rounded-full px-4 py-2">Pure Veg</button>
                <button className="border rounded-full px-4 py-2">Non Veg</button>
                <button className="border rounded-full px-4 py-2">Rs.300-Rs.600</button>
            </div>
        </>
    )
}