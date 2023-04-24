import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart]=useState(false)

  function handleAddToCart(){
    setIsInCart((isInCart)=>!isInCart)
  }
  const color = isInCart ? "yellow" : "pink"

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  className={isInCart ? "Remove": "Add"} style={{background: color}} 
      onClick={handleAddToCart}
      >{isInCart ? "Remove From" : "Add To"} Cart</button>
    </li>
  );
}

export default Item;
