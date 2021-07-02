import React , { Component } from 'react';
//import PropTypes from 'prop-types';

export class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions:[],
            showSuggestions: false,
            userInput: ''
        };
    }
    static defaultProperty = {
        suggestion: []
    };
    render() {
        return (
            <React.Fragment>
                <input
                 type="text"
                 onChange={onChange}
                 onKeyDown={onKeyDown}
                 value={userInput}
                 />
                 {suggestionsListComponent}
            </React.Fragment> 
        );
    };
}
 
export default Autocomplete;
