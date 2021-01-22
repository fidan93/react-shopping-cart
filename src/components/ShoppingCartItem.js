import React ,{ useContext } from 'react';
import {ProductContext} from '../contexts/ProductContext';

const Item = props => {

	const {cart,setCart} = useContext(ProductContext);

	const removeItem = () => {
		setCart(cart.filter(item => {
			return item.id!== props.id
		}))
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick = {removeItem}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
