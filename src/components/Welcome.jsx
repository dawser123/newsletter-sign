import React from 'react'
import classes from './Welcome.module.css'
import illustration from '../assets/illustration-mobile.svg'
import iconList from '../assets/icon-list.svg'
import Input from './Input'
const Welcome = () => {
	return (
		<>
			<div className={classes.container}>
				<div className={classes.items}>
					<img className={classes.illustration} src={illustration} />
					<div className={classes.text}>
						<h1>Stay updated!</h1>
						<h3>Join 60,000+ product managers receiving monthly updates on:</h3>
						<div className={classes.info}>
							<img src={iconList} /> <p>Product discovery and building what matters</p>
						</div>
						<div className={classes.info}>
							<img src={iconList} /> <p>Measuring to ensure updates are a succes</p>
						</div>
						<div className={classes.info}>
							<img src={iconList} /> <p>And much more!</p>
						</div>
						<Input/>
					</div>
				</div>
			</div>
		</>
	)
}
export default Welcome
