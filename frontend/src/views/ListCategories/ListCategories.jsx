
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Messages from '../../common/Messages/'
import { idEdit } from '../../edit/EditAction'
import consts from "../../consts";

class ListCategories extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
        
    }
    componentDidMount(){
        this.refresh()
    }
    componentWillMount(){
        this.refresh()
    }
    refresh() {
        axios.get(`${consts.API_URL}/categories?sort=-createdAt$`)
            .then(resp => this.setState({ ...this.state, list: resp.data }))
    }
    renderRows = (idEdit) => {
        const list = this.state.list || []
        const categoryId = idEdit
        return list.map(category => (
            <tr key={category._id}>
                <td>
                    <strong>{category.name}</strong><br />
                    <small>{category.description}</small>
                </td>
                <td>
                    <Link to={`/categories/${category._id}/edit`} onClick={categoryId.bind(this, category) } className="btn btn-outline-info btn-sm mr-2">Editar</Link>
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
        const {idEdit} = this.props
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
                        <a href="#/categories/new" onClick={idEdit.bind(this, null) } className="btn btn-success float-right">
                            + Nova Categoria
                        </a>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr className="bg-primary text-light">
                            <th>Categorias </th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows(idEdit)}
                    </tbody>
                </table>
                <Messages />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ idEdit }, dispatch)
export default connect(null, mapDispatchToProps )(ListCategories)