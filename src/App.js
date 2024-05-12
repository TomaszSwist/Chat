import './App.css'
import { ChatPage } from './pages/ChatPage'
import { ErrorPage } from './pages/ErrorPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
	return (
		<div className='App'>
			<h1>Chat</h1>

			<ProfilePage />
			<ChatPage />
			<ErrorPage />
		</div>
	)
}

export default App
