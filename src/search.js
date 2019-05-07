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
            this.props.onTermChange(searchText)
    }

    render() {
        return (
            <div>
                 <input type="text"
                     onChange ={this.handleChange.bind(this)}
                     placeholder="Search GIF"
                     value={this.state.value} 
                     id = 'search-bar'  
                  />
            </div>
        );
    }
}

export default Search