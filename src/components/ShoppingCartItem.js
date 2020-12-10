import React,{useContext} from 'react';
import {CartContext} from "../contexts/CartContext";

const Item = props => {
	const {cart,setCart} = useContext(CartContext);
	
	console.log(props)

	const removeItem = () => {
		
	const removed = cart.filter(item => {
		   console.log(item.id,props.id)
        return item.id!==props.id
	   })
	  console.log(removed)
	  setCart(removed)
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
