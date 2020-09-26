import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('performs the task of rendering without crashing', () => {
  
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  
  ReactDOM.unmountComponentAtNode(div);
});
