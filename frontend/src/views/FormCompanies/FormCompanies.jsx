
import React, { Component } from 'react'

class FormCompanies extends Component {
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
                                    <label for="status">Status da empresa</label>
                                    <div className="btn-group">
                                        <label className="btn btn-outline-info active">
                                            Ativa
                  </label>
                                        <label className="btn btn-outline-info">
                                            Inativa
                  </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="socialName">Razão Social</label>
                                    <input type="text" className="form-control" id="socialName" formControlName="socialName" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="fantasyName">Nome Fantasia</label>
                                    <input type="text" className="form-control" id="fantasyName" formControlName="fantasyName" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="cnpj">CNPJ</label>
                                    <input type="text" className="form-control text-right" id="cnpj" formControlName="cnpj" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="categoryId">Categoria</label>
                                    <select name="categoryId" id="categoryId" formControlName="categoryId" className="form-control">
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
                                    <label for="agency">Agencia</label>
                                    <input type="text" className="form-control text-right" id="agency" formControlName="agency" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="acount">Conta</label>
                                    <input type="text" className="form-control text-right" id="acount" formControlName="acount" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label for="email">E-Mail</label>
                                    <input type="text" className="form-control" id="email" formControlName="email" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="telephone">Telefone</label>
                                    <input type="text" className="form-control text-right" id="telephone" formControlName="telephone" />
                                </div>
                                <div className="form-group col-md-2" >
                                    <label for="registerDate">Data Criação</label>
                                    <input type="text" className="form-control" id="registerDate" formControlName="registerDate" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label for="address">Endereço</label>
                                    <input type="text" className="form-control" id="address" formControlName="address" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="city">Cidade</label>
                                    <input type="text" className="form-control" id="city" formControlName="city" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="province">Estado</label>
                                    <input type="text" className="form-control" id="province" formControlName="province" />
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