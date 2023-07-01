import { useState } from 'react'
import './App.css'
import ThankYou from './components/ThankYou'
import Welcome from './components/Welcome'

function App() {
	const [isActive, setIsActive] = useState(true)
	const clickHandler = () => {
		setIsActive(false)
	}
	return <>{isActive ? <Welcome onClick={clickHandler} /> : <ThankYou setIsActive={setIsActive} />}</>
}

export default App
