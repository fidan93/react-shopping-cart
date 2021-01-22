import {useState} from 'react';

const useLocalStorage = (key,initialState) => {

    const [storedValue,setStoredValue] = useState(()=>{
        if(localStorage.getItem(key)){
           return JSON.parse(localStorage.getItem(key)) 
        }
        localStorage.setItem(key,JSON.stringify(initialState))
        return initialState;
    })

     const addItem = item => {
        // 	// add the given item to the cart
        // 	setCart([...cart,item])
        // };
        setStoredValue([...storedValue,item])
        localStorage.setItem(key,JSON.stringify([...storedValue,item]))
    }

    const removeItem = (id) => {
		setStoredValue(storedValue.filter(item => {
			return item.id!== id
        }))
        localStorage.setItem(key,JSON.stringify(storedValue.filter(item => {
			return item.id!== id
        })))
	}
  return [storedValue,addItem,removeItem]
}

export default useLocalStorage;