import React, { useState } from 'react'
const CartContext = React.createContext({
	isActive: true,
	onActive: () => {},
	onDeactive: () => {},
})

export const CartContextProvider = props => {
	const [isActive, setIsActive] = useState(true)
	const activeHandler = () => {
		setIsActive(false)
	}
	const deactiveHandler = () => {
		setIsActive(true)
	}
	return (
		<CartContext.Provider value={{ isActive, onActive: activeHandler, onDeactive: deactiveHandler }}>
			{props.children}
		</CartContext.Provider>
	)
}
export default CartContext
