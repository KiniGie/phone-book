import "./App.css";
import AddUsers from "./AddUsers/AddUsers";
import Users from "./Users/Users";
import { useState } from "react";
import Search from "./Search/search";

function App() {
	const [contacts, setContacts] = useState([]);
	const [filteredContact, setFilteredContact] = useState([]);
	const updateContacts = newContact => {
		setContacts([...contacts, newContact]);

		console.log(newContact);
	};
	const Filtered = contact => {
		console.log(contact);
		setFilteredContact(contact);
	};
	console.log(contacts);
	console.log(filteredContact);

	return (
		<div className='App'>
			<AddUsers updateContact={updateContacts} />{" "}
			{/* komponent, parametr, argumenent */}
			<Search contacts={contacts} filter={Filtered} />
			<Users contacts={contacts} filteredContact={filteredContact} />
		</div>
	);
}

export default App;
