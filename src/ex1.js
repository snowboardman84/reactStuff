import React, {Component} from 'react';
//in this file, create a react component that solves the following 
//javascript problems in the construtor function and then sets
//the solution in a component template as dictated
//and then have the application use the component. 
//ex 1)write a javascript function that gets the number of days from now
//until the end of class. Write the number of days in your react html.

//ex 2)using the object:
class Ex1 extends Component {
  constructor(){
    super();
    this.days = function() {
      var now = new Date();
      var xmas = new Date("April 27, 2018");
      var msNow = now.getTime();
      var msXmas = xmas.getTime();
      var time = msXmas - msNow;
      var time2 = time/(1000*60*60*24);
      var time3 = Math.floor(time2);
        return "Days to another 9 to 5: " + time3;
    }
this.data = {"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
  }
  render() {
    return <div>
   {this.days()};
   </div>

  }


//go through each menuitem and display the "value" in your react html

//ex3) using the array.reduce function, multiply all the values in the array [1,2,9]. Display 
//the end product in your react html (jsx)
}
export default Ex1;