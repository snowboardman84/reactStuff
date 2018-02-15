//Using React's state, make a button that increments a counter
import React, {Component} from 'react';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {counter:0};
        this.handleClick = this.handleClick.bind(this);
        console.log("constructor called");
  }

  componentWillMount(){
    
    console.log('componentWillMount called')
  }

  componentDidMount(){
    this.data = 'snoter data'
    console.log('componentDidMount called')
  }
  handleClick(){
    console.log("button click");
    this.setState({
     counter: this.state.counter + 1,
    })
    //        <button onClick = {this.handleClick} > Change cats pants!</button>
   // <FluffyCat catName={this.state.cat}/> 
};
    
    render() {
        return (
        <div>
            <button onClick={this.handleClick}> {this.state.counter}</button>
        </div>
        )
    }
}