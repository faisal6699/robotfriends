import React ,{Component}from 'react';
import CardList from './CardList';
import SearchField from './SearchField';
import Scroll from './Scroll';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(user => this.setState({ robots: user}));
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value});

	}


	render(){
		const filterArray = this.state.robots.filter(robot =>{

			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if(this.state.robots.length === 0){
			return <h1>loading</h1>
		}

		else{
		
		return(
		<div className="tc">
		<h1>Robofrinds</h1>
		<SearchField searchChange = {this.onSearchChange} />
		<Scroll>
		<CardList robots = { filterArray }/>
		</Scroll>
		</div>
		);	
		
		}

			
	}
	
}

export default App;