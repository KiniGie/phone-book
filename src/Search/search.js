import { useState } from "react";
import "./search.css";

const Search = ({contacts, filter}) => {
	const [phraseSearch, setPhraseSearch] = useState("");

	const HandleOnChange = e => {
        setPhraseSearch(e.target.value)
        const FilteredContact = contacts.filter(contact=>contact.name.includes(phraseSearch))
        filter(FilteredContact)
        console.log(FilteredContact)
	};

    console.log(contacts)
	return (
		<>
			<input className='search-box' onChange={HandleOnChange}></input>
		</>
	);
};

export default Search;
