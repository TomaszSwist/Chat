import { useSelector } from "react-redux"
import { ChatComponent } from "../components/ChatComponent"

export const ChatPage = () => {
    const username = useSelector(state => state.username)

	return (
		<div>
			<h2>ChatPage</h2>
            <h4>Aktualnie piszesz jako: {username}</h4>
            <ChatComponent username={username}/>
		</div>
	)
}
