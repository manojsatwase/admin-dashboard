import { Link } from "react-router-dom"

// Name could be ProductCard or OrderItemCard
const ProductCard = ({name,photo,price,quantity,_id}) => (
    <div className="transaction-product-card">
      <img src={photo} alt={name} />
      <Link to={`/product/${_id}`}>name</Link>
      <span>${price} X {quantity} = ${price * quantity}</span>
    </div>
  )
  
  export default ProductCard;