
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const URL = 'http://localhost:3003/api/categories';

class ListCategories extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt$`)
            .then(resp => this.setState({ ...this.state, list: resp.data }))
    }

    renderRows = () => {
        const list = this.state.list || []
        return list.map(category => (
            <tr key={category._id}>
                <td>
                    <strong>{category.name}</strong><br />
                    <small>{category.description}</small>
                </td>
                <td>
                    <Link to={{pathname:`/${category._id}/edit`,state: {categoryId: category._id}}} className="btn btn-outline-info btn-sm mr-2">Editar</Link>
                    <button onClick={() => this.handleRemove(category)} className="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        ))
    }

    handleRemove(category) {
        axios.delete(`${URL}/${category._id}`)
            .then(resp => this.refresh(this.state.description))
    }

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
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListCategories