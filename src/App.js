import React, { Component } from 'react';


class App extends Component {
  state = {
    userInput: ''
  }
  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }
  render() {
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
      </div>
    );
  }
}

export default App;
