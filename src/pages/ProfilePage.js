import { useDispatch, useSelector } from "react-redux";

export const ProfilePage = () => {
    const dispach = useDispatch();

    const username = useSelector(state => state.username)

    let newUserName

   const onUserNameChange = e => {
    newUserName = e.target.value
    return newUserName
   }

   const onUserNameSend = () => {
    dispach({type: "CHANGE_USERNAME", payload: newUserName})
   } 

    return (
		<div>
			<h2>Profil</h2>
			<h3>Twój nick to: {username}</h3>
			<label>
				Podaj swój nick: <input type='text' onChange={onUserNameChange}/>
                <button onClick={onUserNameSend}>Zmień Nick</button>
			</label>
		</div>
	)
}
