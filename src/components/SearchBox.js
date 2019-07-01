import React from 'react';
import './SearchBox.css'

function SearchBox(props) {
    return (
            <input className='bg-light-blue tc pa2 ma3 br3'
            type='searchbox'
            placeholder='Search Robots'
            onChange = {props.onSearchChange}/>
        );
}

export default SearchBox;