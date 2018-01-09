import { render } from 'react-dom'
import React, { Component } from 'react'
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
  }
}


const store = createStore(counter);

class App extends Component {
  render() {
    const gets = () => {
      return this.props.store.getState();
    }
    return (
      <div>
        <table>
          <tr>
            <td>
              <button type='submit' onClick={() => this.props.store.dispatch({ type: 'INC' })}> Add </button></td>
            <td><button type='submit' onClick={() => this.props.store.dispatch({ type: 'DEC' })}> Sub </button></td>
          </tr>
          <tr><td>
            {gets()}</td></tr>
        </table>
      </div>
    )
  }
}

const render_1 = () => render(<App store={store} />, document.getElementById('root'));
render_1();
store.subscribe(render_1);