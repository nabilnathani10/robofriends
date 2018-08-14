import React, { Component } from 'react';
//robots is destructured because not export default in ./robots.js
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

//smart component
//has state
//https://reactjs.org/docs/react-component.html
class App extends Component {

  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() })
      .then(users => { return this.setState({robots: users})});
  }

  //arrow functions make sure the this pointer is correct
  onSearchChange = (event) => {
    //use setState to update State field
    this.setState({searchField: event.target.value});
  }

  render() {

    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  };
  
}

export default App;
