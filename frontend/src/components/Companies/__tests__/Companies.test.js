import React from 'react';
import ReactDOM from 'react-dom';
import Companies from '../Companies';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Companies />, div);
  ReactDOM.unmountComponentAtNode(div);
});
