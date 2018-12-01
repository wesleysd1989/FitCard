
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
                <div className="row mb-4">
                    <div className="col-md">
                        <h1 className="h2 border-left pl-2">
                            Categorias
                        </h1>
                    </div>
                    <div className="col-md">
                        <a href="#/new" className="btn btn-success float-right">
                            + Nova Categoria
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ListCategories