import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';

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
            return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        this.setState({
            robots : filteredArray
        })
    }

    render() {
        return (
                <div className ='tc'>
                    <h2>ROBOFRIENDS</h2>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <CardList robots={this.state.robots}/>
                </div>
            );
    }
}

export default  App;