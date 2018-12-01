import React from 'react';
import ReactDOM from 'react-dom';
import CompaniesForm from '../CompaniesForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompaniesForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
