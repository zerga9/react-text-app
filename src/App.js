import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css'
class App extends Component {
  state = {
    userInput: ''
  }
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('') //now you have an array of characters
    text.splice(index, 1) //remove the character
    const updatedText = text.join(''); //it becomes a string again
    this.setState({userInput: updatedText})
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)}
      />
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum lenght)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop</li>
          <li>When you click on a CharComponent, it should be removed from the entered text</li>
        </ol>
        <hr />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length}/>
          {charList}
      </div>
    );
  }
}

export default App;
