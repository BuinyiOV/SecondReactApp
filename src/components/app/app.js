import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
				{name: 'John C.', salary: 800, increase: false, id: 1},
				{name: 'Alex M.', salary: 3000, increase: true, id: 2},
				{name: 'Carl W.', salary: 5000, increase: false, id: 3}
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {//Принцип іммутабельності: не можна напряму змінювати стейтб треба працювати з копіями даних
		this.setState(({data}) => {
			// const index = data.findIndex(elem => elem.id === id);
			// const before = data.slice(0, index);//копія масиву даних до об'єкту який видаляємо
			// const after = data.slice(index + 1);//копія масиву даних після об'єкту який видаляємо
			// const newArr = [...before, ...after];
			return {
				//data: newArr
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name, 
			salary,
			increase: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		});
	}

	render (){
		return (
			<div className="app">
				<AppInfo />
	
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
	
				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}/>
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;