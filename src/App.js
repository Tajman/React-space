import React, { Component } from 'react';
import './style/App.css';  
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';  
import {Jumbotron, Button} from 'react-bootstrap'; 

import MemeItem from './memeItem';  
import Search from './search'; 
import Giflist from './giflist'; 
import request from 'superagent';
export const API_GIPHY = 'WBxWrgJ3GP78HKFzD27Vu9FvNAwnfbnn';


class App extends Component {
    constructor(){
        super()

        this.state = {
            memeLimit: 10,
            disabledNext: false,
            disabledPrev: false,   
            gifs: []
        }
    } 


    getUrl(searchText) { 
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_GIPHY}&q=${searchText}&limit=10&offset=0&rating=PG-13&lang=en` 

        request.get(url, (err, res) => {
            this.setState({gifs: res.body.data})
        });
    }

    togglePrev(e) {
        let memeLimit = this.state.memeLimit - 10;
        let disabledPrev = (memeLimit === 0);

        this.setState({ memeLimit: memeLimit, disabledPrev: disabledPrev, disabledNext: false })
    }

    toggleNext(e) {
        let memeLimit = this.state.memeLimit + 10;
        let disabledNext = memeLimit === (this.props.memeLimit - 10);

        this.setState({ memeLimit: memeLimit, disabledNext: disabledNext, disabledPrev: false })
    }


    render(){ 
        const { disabledNext, disabledPrev } = this.state
        return(
            <div>
                <Jumbotron id='jumb'>
                    <h2><u>Welcome to the Meme Generator</u></h2> 
                </Jumbotron> 
            
                <Container id='cont-1'> 
                    <h2>Imgflip meme list</h2>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                    return (
                        <MemeItem
                            meme={meme}
                            key={index}
                            text0={this.state.text0}
                            text1={this.state.text1}
                        />
                    )
                  })
                } 

            <div id = 'spacel'/>
            <div> 
                <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} /> 
            <div id = 'spacew'/>
                <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
            </div>
                </Container>  

                <Container id='cont-1'> 
                    <h2>Search for a gif</h2> 
                        <Search onTermChange={searchText => this.getUrl(searchText)} /> 

                        <Giflist gifs={this.state.gifs}/>
                </Container>

                <Container id='footer'> 
                    <a href="https://github.com/Tajman/React-space">My github repository</a>
                </Container>
            </div>
              )
          }
} 

function Prev(props) {
    return (
        <Button variant="primary" onClick={props.toggle} disabled={props.active}>Previous</Button>
    );
}

function Next(props) {
    return (
        <Button variant="primary" onClick={props.toggle} disabled={props.active}>Next</Button>
    );
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,null)(App)
