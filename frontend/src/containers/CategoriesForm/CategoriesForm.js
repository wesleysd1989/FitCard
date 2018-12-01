import React, { Component } from 'react'

import { Nav, FormCategories } from '../../views'



class CategoriesForm extends Component {
  render() {
    return (
      <div>
        <Nav category="active"/>
        <FormCategories />              
      </div>
    );
  }
}

export default CategoriesForm

