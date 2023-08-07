import React from "react";
import "./users.css";

const Users = props => {
    console.log(props.filteredContact)
    
	return (
		<>
            {props.filteredContact.length>0 ? 
            props.filteredContact.map(contact => (
					<table className='contact'>
						<tr>
							<td>{contact.name}</td>
							<td>{contact.phone}</td>
						</tr>
					</table>
				)):
                props.contacts.map(contact => (
					<table className='contact'>
						<tr>
							<td>{contact.name}</td>
							<td>{contact.phone}</td>
						</tr>
					</table>
				))}
			<h2>lista uzytkowników</h2>
			<div className='list-container'>
			</div>
		</>
	);
};

export default Users;
