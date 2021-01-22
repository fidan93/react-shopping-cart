import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext'
const Navigation = () => {
	const value = useContext(ProductContext);
	
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{value.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
