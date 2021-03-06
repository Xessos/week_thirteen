import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';

let store = Redux.createStore(reducer);



class Counter extends React.Component {
  subtract(){
    store.dispatch({
      type: 'subtract'
    });
  }
  add(){
    store.dispatch({
      type: 'add'
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.subtract()}>-</button>
        {store.getState()}
        <button onClick={() => this.add()}>+</button>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
