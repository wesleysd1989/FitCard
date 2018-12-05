import React, { Component } from 'react'

import { Nav, ListCategories } from '../../views'



class Categories extends Component {
  render() {
    return (
      <div>
        <Nav category="active"/> 
        <ListCategories />
      </div>
    );
  }
}

export default Categories

