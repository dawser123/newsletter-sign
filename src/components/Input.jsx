import React, { useContext, useState } from 'react'
import classes from './Input.module.css'
import CartContext from '../store/cartContext'
const Input = () => {
	const ctx = useContext(CartContext)
	const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	const [enteredEmail, setEnteredEmail] = useState('')
	const [emailIsValid, setEmailIsValid] = useState(true)
	const emailChangeHandler = event => {
		setEnteredEmail(event.target.value)
	}

	console.log(ctx.onActive);
	const submitHandler = event => {
		event.preventDefault()

		if (enteredEmail.trim().length === 0 || !validateEmail.test(enteredEmail)) {
			setEmailIsValid(false)
			return
		} else {
			setEnteredEmail('')
			setEmailIsValid(true)
			ctx.onActive()
		}
	}
	return (
		<>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">
						Email adress
						{!emailIsValid && <p>Valid email required</p>}
					</label>
					<input
						className={`${emailIsValid === false ? classes.invalid : ''}`}
						onChange={emailChangeHandler}
						value={enteredEmail}
						id="email"
						type="text"
						// autoComplete="off"
						placeholder="email@company.com"
					/>
					<button>Subscribe to monthly newsletter</button>
				</div>
			</form>
		</>
	)
}

export default Input
