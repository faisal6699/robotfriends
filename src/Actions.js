	import {
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED
		} from './Constants.js';
	
	import {apiCall} from './api/api'
		
	export const setSearchField = (text) => ({
		type: CHANGE_SEARCH_FIELD,
		payload: text
	})

	export const requestRobots = () => (dispatch) => {
		dispatch({ type: REQUEST_ROBOTS_PENDING });
		fetch('https://obscure-ocean-25717.herokuapp.com/')
			.then(response => response.json())
	  		.then(data =>{
					
					dispatch( { type: REQUEST_ROBOTS_SUCCESS, payload: data })

			  })
	  		.catch(error => dispatch ({ type: REQUEST_ROBOTS_FAILED, payload: error }));
	}

