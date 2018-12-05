import React, { Component } from 'react'

import { Nav, ListCompanies } from '../../views'



class Companies extends Component {
  render() {
    return (
      <div>
        <Nav company="active" />
        <ListCompanies />                
      </div>
    );
  }
}

export default Companies

