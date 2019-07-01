import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots
        };
    }

    onSearchChange = (event) => {
        const searchTerm = event.target.value;
        const filteredArray = robots.filter(robot => {
            const {name} = robot;
            return name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        this.setState({
            robots : filteredArray
        })
    }

    render() {
        return (
                <div className ='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <CardList robots={this.state.robots}/>
                </div>
            );
    }
}

export default  App;