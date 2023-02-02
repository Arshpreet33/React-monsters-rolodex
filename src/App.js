import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // monsters: [{ name: 'Linda' }, { name: 'Frank' }, { name: 'Jackie' }],
      monsters: [],
      searchName: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchTextChange = (event) => {
    const searchName = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchName };
    });
  };

  render() {
    const { monsters, searchName } = this.state;
    const { onSearchTextChange } = this;
    var filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchName)
    );
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox
          className="monsters-search-box"
          placeholder="search monsters"
          onChangeHandler={onSearchTextChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>Arshpreet Singh</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
