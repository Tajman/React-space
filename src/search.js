import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(event) {
        const searchText = event.target.value;
        this.setState({
            value: searchText
        });
        if(searchText.length > 2) {
            this.props.onTermChange(searchText)
        }
    }

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.props.onTermChange(this.state.searchText)
        }
    }

    render() {
        return (
            <div>
                 <input type="text"
                     onChange ={this.handleChange.bind(this)}
                     onKeyUp = {this.handleKeyUp.bind(this)}
                     placeholder="Search GIF"
                     value={this.state.value} 
                     id = 'search-bar'
                  />
            </div>
        );
    }
}

export default Search