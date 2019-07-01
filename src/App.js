import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchTerm: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        const searchTerm = event.target.value;

        this.setState({
            searchTerm
        })
    }

    render() {
        const { robots, searchTerm } = this.state;
        const filteredArray = robots.filter(robot => {
            const { name } = robot;
            return name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        return !robots.length ?
        <h1>Loading</h1> :
        (
                <div className ='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredArray}/>
                    </Scroll>
                </div>
            );
    }
}

export default  App;