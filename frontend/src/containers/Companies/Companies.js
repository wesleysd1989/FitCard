import React, { Component } from 'react'

import { Nav, ListCompanies } from '../../views'



class Companies extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ListCompanies />                
      </div>
    );
  }
}

export default Companies

