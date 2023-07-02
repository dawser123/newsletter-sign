import React from 'react'
import icon from '../assets/icon-list.svg'
import classes from './ThankYou.module.css'
const ThankYou = ({setIsActive}) => {
	const clickHandler = () => {
		setIsActive(true)
	}
	return (
		<div className={classes.container}>
			<img src={icon} />

			<h1>Thanks for subscribing!</h1>
			<p>
				A confirmation email has been sent to <span>ash@loremcompany.com.</span> Please open it and click the button inside to
				confirm your subscription
			</p>
			<button onClick={clickHandler} className={classes.dismiss}>Dissmis message</button>
		</div>
	)
}

export default ThankYou
