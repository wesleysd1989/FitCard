
import React, { Component } from 'react'

class FormCompanies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ativa: "active",
            inativa: null
        }
    }
    changeState(valor) {
        if (valor === "ativa")
            this.setState({ ativa: "active", inativa: null })
        else if (valor === "inativa")
            this.setState({ ativa: null, inativa: "active" })
    }
    render() {
        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#/companies">Empresas</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Cadastro de Nova Empresa</li>
                    </ol>
                </nav>
                <div className="row mb-4">
                    <div className="col-md-9">
                        <h1 className="h2 border-left pl-2">
                            Cadastro de Nova Empresa
                        </h1>
                    </div>
                    <div className="col-md-3">
                        <a href="#/companies" className="btn btn-light float-right">
                            Voltar
                        </a>
                    </div>
                </div>
                <form>
                    <div className="card">
                        <div className="card-header">
                            Informações sobre a empresa
                        </div>
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="status">Status da empresa</label>
                                    <div className="btn-group">
                                        <label onClick={() => this.changeState("ativa")} className={`btn btn-outline-info ${this.state.ativa}`}>
                                            Ativa
                                        </label>
                                        <label onClick={() => this.changeState("inativa")} className={`btn btn-outline-info ${this.state.inativa}`}>
                                            Inativa
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="socialName">Razão Social</label>
                                    <input type="text" className="form-control" id="socialName" formcontrolname="socialName" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="fantasyName">Nome Fantasia</label>
                                    <input type="text" className="form-control" id="fantasyName" formcontrolname="fantasyName" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="cnpj">CNPJ</label>
                                    <input type="text" className="form-control text-right" id="cnpj" formcontrolname="cnpj" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="categoryId">Categoria</label>
                                    <select name="categoryId" id="categoryId" formcontrolname="categoryId" className="form-control">
                                        <option>
                                            Categoria 1
                                        </option>
                                        <option>
                                            Categoria 2
                                        </option>
                                        <option>
                                            Categoria 3
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="agency">Agencia</label>
                                    <input type="text" className="form-control text-right" id="agency" formcontrolname="agency" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="acount">Conta</label>
                                    <input type="text" className="form-control text-right" id="acount" formcontrolname="acount" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label htmlFor="email">E-Mail</label>
                                    <input type="text" className="form-control" id="email" formcontrolname="email" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="telephone">Telefone</label>
                                    <input type="text" className="form-control text-right" id="telephone" formcontrolname="telephone" />
                                </div>
                                <div className="form-group col-md-2" >
                                    <label htmlFor="registerDate">Data Criação</label>
                                    <input type="text" className="form-control" id="registerDate" formcontrolname="registerDate" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" className="form-control" id="address" formcontrolname="address" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="city">Cidade</label>
                                    <input type="text" className="form-control" id="city" formcontrolname="city" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="province">Estado</label>
                                    <input type="text" className="form-control" id="province" formcontrolname="province" />
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
export default FormCompanies