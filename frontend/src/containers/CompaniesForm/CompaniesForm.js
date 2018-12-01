import React, { Component } from 'react'

import { Nav, FormCompanies } from '../../views'



class CompaniesForm extends Component {
  render() {
    return (
      <div>
        <Nav company="active"/>
        <FormCompanies />              
      </div>
    );
  }
}

export default CompaniesForm

