
import React, { Component } from 'react'

class ListCompanies extends Component {
    render() {
        return (
            <div className="container mb-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Empresas</li>
                    </ol>
                </nav>
                <div class="row mb-4">
                    <div className="col-md">
                        <h1 className="h2 border-left pl-2">
                            Empresas
                        </h1>
                    </div>
                    <div className="col-md">
                        <a href="#/companies/new" className="btn btn-success float-right">
                            + Nova Empresa
                        </a>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr className="bg-primary text-light">
                            <th>Empresa</th>
                            <th>Categoria</th>
                            <th className="text-center">Situação</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                                <strong>Nome da Empresa Aqui</strong><br />
                                <small className="text-success">10:20 12/12/2012</small><br />
                                <small >Nome Fantasia</small>
                            </td>
                            <td >
                                Categoria Aqui
                                    </td>
                            <td className="text-center">
                                Status Aqui
                                    </td>
                            <td className="text-center">
                                <a href="#/:id/edit" className="btn btn-outline-info btn-sm mr-2">Editar</a>
                                <button href="#/:id/delete" className="btn btn-outline-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                <strong>Nome da Empresa Aqui</strong><br />
                                <small className="text-success">10:20 12/12/2012</small><br />
                                <small >Nome Fantasia</small>
                            </td>
                            <td >
                                Categoria Aqui
                                    </td>
                            <td className="text-center">
                                Status Aqui
                                    </td>
                            <td className="text-center">
                                <a href="#/:id/edit" className="btn btn-outline-info btn-sm mr-2">Editar</a>
                                <button href="#/:id/delete" className="btn btn-outline-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListCompanies