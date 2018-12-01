import React from 'react';
import ReactDOM from 'react-dom';
import CategoriesForm from '../CategoriesForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
