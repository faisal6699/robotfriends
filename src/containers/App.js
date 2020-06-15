import React ,{Component}from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../Actions.js';
import CardList from '../Components/CardList';
import SearchField from '../Components/SearchField';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component{
	componentDidMount(){
		this.props.onRequestRobots();
	}


	render(){
		const { searchField, onSearchChange, robots, isPending } = this.props;
		
		const filterArray = robots.filter(robot =>{

			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return (isPending) ?
		<h1>loading</h1> :
		<div className="tc">
		<h1>Robofrinds</h1>
		<SearchField searchChange = {onSearchChange} />
		<Scroll>
		<ErrorBoundry>
		<CardList robots = { filterArray }/>
		</ErrorBoundry>
		</Scroll>
		</div>	
		
	
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);