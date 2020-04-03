import React ,{Component}from 'react';
import CardList from './CardList';
import SearchField from './SearchField'
import {robots} from './robots';

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value});

	}


	render(){
		const filterArray = this.state.robots.filter(robot =>{

			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return(
		<div className="tc">
		<h1>Robofrinds</h1>
		<SearchField searchChange = {this.onSearchChange} />
		<CardList robots = { filterArray }/>
		</div>
		);	
	}
	
}

export default App;