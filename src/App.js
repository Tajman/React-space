import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';  
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import {Form, FormGroup, FormControl, Jumbotron} from 'react-bootstrap'; 

import MemeItem from './memeItem';
import MyMemes from './memes';

class App extends Component {
  constructor(){
    super()

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    }
  }


  render(){
    return(
      <div>
        <Jumbotron id='jumb'>
        <h2><u>Welcome to the Meme Generator</u></h2> 
        </Jumbotron> 
        <Container id='cont-1'>
        <MyMemes />
        <h4><i>Write some text</i></h4>
        <Form inline>
          <FormGroup>
            <Form.Label>Top</Form.Label>
            <FormControl
              type='text'
              onChange={(event) => this.setState({text0: event.target.value})}
            ></FormControl>
          {' '}
          </FormGroup>
          <FormGroup>
            <Form.Label>Bottom</Form.Label>
            {' '}
            <FormControl
              type='text'
              onChange={(event) => this.setState({text1: event.target.value})}
              ></FormControl>
          </FormGroup>
        </Form>
        {/*Here we are going to slice before we map because we want only the first 10,
           we will than add a button allowing the user to load 10 more. We will use the state to make this happen  */}
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
        <div
          onClick={() => this.setState({memeLimit: this.state.memeLimit + 10})}
          className='meme-button'>
          Load 10 more memes...
        </div> 
          </Container> 
          
          <Container id='footer'> 
              <a href="https://github.com/Tajman/React-space">My github repository</a>
              
          </Container>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps,null)(App)
