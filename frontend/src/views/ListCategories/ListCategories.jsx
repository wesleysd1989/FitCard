
import React, { Component } from 'react'

class ListCategories extends Component {

    render() {
        return (
            <div className="container mb-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Categorias</li>
                    </ol>
                </nav>
            </div>
        )
    }
}
export default ListCategories