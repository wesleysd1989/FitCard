
import React, { Component } from 'react'

class FormCategories extends Component {
    render() {
        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#/categories">Categorias</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Cadastro de Nova Categoria</li>
                    </ol>
                </nav>
                <div className="row mb-4">
                    <div className="col-md-9">
                        <h1 className="h2 border-left pl-2">
                            Cadastro de Nova Categoria
                        </h1>
                    </div>
                    <div className="col-md-3">
                        <a href="#/categories" className="btn btn-light float-right">
                            Voltar
                        </a>
                    </div>
                </div>
                <form >
                    <div className="card">
                        <div className="card-header">
                            Informações sobre a categoria
                        </div>
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" className="form-control" id="name" formcontrolname="name" />
                                </div>
                                <div className="form-group col-md-8">
                                    <label htmlFor="description">Descrição</label>
                                    <input type="text" className="form-control" id="description" formcontrolname="description" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg float-right mt-3">Salvar</button>
                </form>
            </div>
        )
    }
}
export default FormCategories