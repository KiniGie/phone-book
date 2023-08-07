import "./addUsers.css";
import { useState } from "react";

const AddUsers = props => {
	const [userName, setUserName] = useState("");
	const [userPhone, setUserPhone] = useState("");
	const [contacts, setContacts] = useState([]);

	const addUsers = () => {
		console.log(userName, userPhone);
		setContacts([
			...contacts,
			{
				id: Math.floor(Math.random() * 1000),
				name: userName,
				phone: userPhone,
			},
		]);
		props.updateContact({
			id: Math.floor(Math.random() * 1000),
			name: userName,
			phone: userPhone,
		});
		setUserName("");
		setUserPhone("");
	};
	console.log(contacts);

	return (
		<>
			<div className='container'>
				<input
					value={userName}
					onChange={e => setUserName(e.target.value)}
					id='user'
					className='input-users'
					placeholder='nazwa uzytkownika'></input>
				<input
					value={userPhone}
					onChange={e => setUserPhone(e.target.value)}
					id='phone'
					className='input-phone'
					placeholder='numer uzytkownika'></input>
				<div className='btn-box'>
					<button onClick={addUsers} className='btn-add'>
						Add
					</button>
				</div>
			</div>
		</>
	);
};
export default AddUsers;
