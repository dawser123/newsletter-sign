import React, { useState } from 'react'
const SubscriptionContext = React.createContext({
	isActive: true,
	onActive: () => {},
	onDeactive: () => {},
})
export const SubscriptionContextProvider = props => {
	const [isActive, setIsActive] = useState(true)
	const activeHandler = () => {
		setIsActive(false)
	}
	const deactiveHandler = () => {
		setIsActive(true)
	}
	return (
		<SubscriptionContext.Provider value={{ isActive, onActive: activeHandler, onDeactive: deactiveHandler }}>
			{props.children}
		</SubscriptionContext.Provider>
	)
}
export default SubscriptionContext
