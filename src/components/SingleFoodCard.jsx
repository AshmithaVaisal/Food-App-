

export const SingleFoodCard = ({food}) => {
  return (
    <>
      <div>
        <img src={food.image} alt={food.name} />
        <div>
          <h3>{food.name}</h3>
          <p>{food.description}</p>
          <div>
            <span>{food.price}</span>
            <span>{food.rating}</span>
          </div>
        </div>
      </div>
    </>
  )
}
