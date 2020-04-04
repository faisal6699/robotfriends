import React from 'react';

const SearchField = ({searchChange}) =>{
	return (
		<div className="pa1">
		<input
		className="pa2 ba b--green bg-lightest-blue"
		type="search" 
		placeholder="search robots"
		onChange = {searchChange}
		/>
		</div>
	);
}
export default SearchField;