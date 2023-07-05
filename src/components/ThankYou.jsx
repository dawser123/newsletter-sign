import React, { useContext } from 'react'
import CartContext from '../store/cartContext'
import icon from '../assets/icon-list.svg'
import classes from './ThankYou.module.css'
const ThankYou = () => {
	const ctx = useContext(CartContext)

	return (
		<div className={classes.container}>
			<img src={icon} />

			<h1>Thanks for subscribing!</h1>
			<p>
				A confirmation email has been sent to <span>ash@loremcompany.com.</span> Please open it and click the button
				inside to confirm your subscription
			</p>
			<button onClick={ctx.onDeactive} className={classes.dismiss}>
				Dissmis message
			</button>
		</div>
	)
}

export default ThankYou
