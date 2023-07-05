import { useContext } from 'react'
import ThankYou from './components/ThankYou'
import Welcome from './components/Welcome'
import SubscriptionContext from './store/SubscriptionContext'
import './App.css'
function App() {
	const ctx = useContext(SubscriptionContext)
	return <>{ctx.isActive ? <Welcome /> : <ThankYou />}</>
}
export default App
