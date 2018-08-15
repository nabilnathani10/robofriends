import React, { Component } from 'react';
import { connect } from 'react-redux';
//robots is destructured because not export default in ./robots.js
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../actions';

// mapStateToProps tells how to transform the current Redux 
//store state into the props you want to pass to a 
// presentational component you are wrapping.
const mapStateToProps = state => {
  return {
    searchField : state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

//dispatch is what triggers the action
const mapDispatchToProps = (dispatch) => {
    return  {
      onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots : () => dispatch(requestRobots())
    }
}

//https://reactjs.org/docs/react-component.html
class App extends Component {

  componentDidMount() {
      this.props.onRequestRobots();
  }

  render() {

    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
