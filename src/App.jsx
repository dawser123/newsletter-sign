import { useContext} from 'react'
import ThankYou from './components/ThankYou'
import Welcome from './components/Welcome'
import CartContext from './store/cartContext'
import './App.css'

function App() {
const ctx = useContext(CartContext)
	return (
		<>
			{ctx.isActive ? <Welcome /> : <ThankYou />}
		</>
	)
}

export default App
