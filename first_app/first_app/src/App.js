import React, { Component } from 'react'; // this is always required
import './App.css'; // import some global styling
import Person from './Person/Person'; //import the component I made in the ./person folder
  // since the "person" object is the default export, I can name it whatever I like

class App extends Component {
  // You always need to eventually render some html to the DOM
  // other operations can occur, but html must be rendered
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Person name='RoboHuman9000' type='titanium alloy' sound='bleep bloop'/>
        <Person name='MeckaMan5000' type='carbon fiber' sound='bzzzz bzzzz'/>
        <Person/>

      </div>

    );
    // this creates, wait for it, an html element.
    // jsx is compiled into the React.creatElement calls bellow.
    // nested functions like this is dumb though, hense, jsx!
    // return React.createElement('div',{className: 'App'},React.createElement('h1',{className: 'App'},'greetings from react'));
  }
}

export default App; 
  // if this file is imported, the App class is imported by default
  // this is imported in the index.js file
