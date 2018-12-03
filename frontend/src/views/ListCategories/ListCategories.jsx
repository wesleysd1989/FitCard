
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
                        <a href="#/categories/new" className="btn btn-success float-right">
                            + Nova Categoria
                        </a>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr className="bg-primary text-light">
                            <th>Categorias</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                                <strong>Nome Da categoria</strong><br />
                                <small>Descrição da categoria</small>
                            </td>
                            <td>
                                <a href="#/:id/edit" className="btn btn-outline-info btn-sm mr-2">Editar</a>
                                <button href="#/:id/detele" className="btn btn-outline-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                <strong>Nome Da categoria</strong><br />
                                <small>Descrição da categoria</small>
                            </td>
                            <td>
                                <a href="#/:id/edit" className="btn btn-outline-info btn-sm mr-2">Editar</a>
                                <button href="#/:id/detele" className="btn btn-outline-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListCategories