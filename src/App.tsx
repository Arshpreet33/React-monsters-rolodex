import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/fetch.utils';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchName, setSearchName] = useState('');
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		setFilteredMonsters(
			monsters.filter((monster) =>
				monster.name.toLocaleLowerCase().includes(searchName)
			)
		);
	}, [monsters, searchName]);

	const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchName(event.target.value.toLocaleLowerCase());
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>

			<SearchBox
				className='monsters-search-box'
				placeholder='search monsters'
				onChangeHandler={onSearchTextChange}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
