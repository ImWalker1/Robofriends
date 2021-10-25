import React, {Component} from 'react';
import CardList from '../components/cardlist';
//import {robots} from './robots';
import SearchBox from '../components/searchbox'
import './app.css'
import Scroll from './scroll'

class App extends Component {
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield:''
		}
	}
	componentDidMount() {
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>{
				return response.json();

			})
			.then(users =>{
				this.setState({robots:users});
			})
			
		}
	onSearchChange = (event)=>{
		this.setState({searchfield: event.target.value})
		console.log(event.target.value)
		
		
		}
	

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if (!robots.length){
			return <h1 className='tc'>Loading</h1>;

		}
		else{
			return (
			<div className='tc'>
				<h1 className='f1'>ROBOFRIENDS</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots ={filteredRobots}/>
				</Scroll>
			</div>
			);
		}
		
	}
	
}
export default App