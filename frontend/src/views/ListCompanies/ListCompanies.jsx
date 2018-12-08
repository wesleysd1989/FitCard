
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Messages from '../../common/Messages/'
import { idEdit } from '../../edit/EditAction'
import consts from "../../consts";

class ListCompanies extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [] }
        this.refresh()
    }

    componentDidMount(){
        this.refresh()
    }
    componentWillMount(){
        this.refresh()
    }

    renderRows = (idEdit) => {
        const list = this.state.list || []
        const companyId = idEdit
        return list.map(company => (
            <tr key={company._id}>
                <td>
                    <strong>{company.socialName}</strong><br />
                    <small className="text-success">{company.registerDate}</small><br />
                    <small >{company.fantasyName}</small>
                </td>
                <td >
                    {company.category}
                </td>
                {!!company.status ? <td className="text-center">
                    Ativa
                </td>
                :
                <td className="text-center">
                    Inativa
                </td>}
                <td className="text-center">
                <Link to={`/companies/${company._id}/edit`} onClick={companyId.bind(this, company) } className="btn btn-outline-info btn-sm mr-2">Editar</Link>
                    <button onClick={() => this.handleRemove(company)} className="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        ))
    }

    handleSearch(socialName) {
        this.refresh(socialName)
    }

    refresh(socialName) {
        const search = socialName ? `&socialName__regex=/${socialName}/` : ''
        axios.get(`${consts.API_URL}/companies?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, list: resp.data }))
    }

    handleRemove(company) {
        axios.delete(`${consts.API_URL}/companies/${company._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        const idEdit = this.props.idEdit
        return (
            <div className="container mb-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Empresas</li>
                    </ol>
                </nav>
                <div className="row mb-4">
                    <div className="col-md">
                        <h1 className="h2 border-left pl-2">
                            Empresas
                        </h1>
                    </div>
                    <div className="col-md">
                        <a href="#/companies/new" onClick={idEdit.bind(this, null) } className="btn btn-success float-right">
                            + Nova Empresa
                        </a>
                    </div>
                </div>
                <div className="form-row">
                    <input type="text" className="container mb-5 form-control" placeholder="Digite aqui sua pesquisa" onChange={(e) => { this.handleSearch(e.target.value); }}/>
                </div>
                <table className="table table-hover table-responsive">
                    <thead>
                        <tr className="bg-primary text-light">
                            <th>Empresa</th>
                            <th>Categoria</th>
                            <th className="text-center">Situação</th>
                            <th className="text-center">Ações</th>
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
export default connect(null, mapDispatchToProps)(ListCompanies)