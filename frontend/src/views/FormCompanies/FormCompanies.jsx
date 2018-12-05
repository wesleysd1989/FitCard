
import React, { Component } from 'react'

import MaskedInput from 'react-maskedinput'
import cnpjValidatior from "@fnando/cnpj/dist/node";
// eslint-disable-next-line
import { isValid as isValidCnpj } from "@fnando/cnpj";



class FormCompanies extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            ativa: "active",
            inativa: null,
            verified: false,
            socialNameCheck1: false,
            socialNameCheck2: false,
            cnpjCheck: false,
            telephoneChecked: false,
            socialNameValue: "",
            cnpjValue: "",
            telephoneValue: "",
            categoryValue: ""
        }
    }
    changeState(valor) {
        if (valor === "ativa")
            this.setState({ ativa: "active", inativa: null })
        else if (valor === "inativa")
            this.setState({ ativa: null, inativa: "active" })
    }

    changeStateSocialName(value) {
        this.setState({ socialNameValue: value })
        if (value === "") {
            this.setState({ socialNameCheck1: true })
        }
        else {
            this.setState({ socialNameCheck1: false })
        }
        if (value.length <= 1 && value.length > 0) {
            this.setState({ socialNameCheck2: true })
            this.setState({ socialNameCheck1: false })
        }
        else {
            this.setState({ socialNameCheck2: false })
        }
    }

    changeStateCNPJ(value) {
        this.setState({ cnpjValue: value })
        if (cnpjValidatior.isValid(value) !== true) {
            this.setState({ cnpjCheck: true })
        }
        else {
            this.setState({ cnpjCheck: false })
        }
    }

    changeStateCategory(value) {
        this.setState({ categoryValue: value })
        if (value === "Categoria 2" && this.state.telephoneValue === "") {
            this.setState({ telephoneChecked: true })
        }
        else {
            this.setState({ telephoneChecked: false })
        }
    }

    changeStateTelephone(value) {
        this.setState({ telephoneValue: value })
        if (value === "" && this.state.categoryValue === "Categoria 2") {
            this.setState({ telephoneChecked: true })
        }
        else {
            this.setState({ telephoneChecked: false })
        }
    }
    
    onVerify() {
        this.setState({
            verified: true
        })
    }
    check(socialName, cnpj, categoria, telephone) {
        if (socialName !== "" && cnpjValidatior.isValid(cnpj) !== false) {
            if (categoria === "Categoria 2" && telephone === "")
                this.setState({ verified: false })
            else if (categoria === "Categoria 2" && telephone !== "")
                this.setState({ verified: true })
            else if (categoria !== "Categoria 2")
                this.setState({ verified: true })
        } else {
            this.setState({ verified: false })
        }
    }
    render() {
        const socialNameCheck1 = this.state.socialNameCheck1
        const socialNameCheck2 = this.state.socialNameCheck2
        const cnpjCheck = this.state.cnpjCheck
        const telephoneChecked = this.state.telephoneChecked
        console.log()
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
                                    <label htmlFor="socialName">*Razão Social</label>
                                    <input type="text" placeholder="Razão Social" onChange={(e) => { this.changeStateSocialName(e.target.value); this.check(e.target.value, this.state.cnpjValue, this.state.categoryValue, this.state.telephoneValue); }} className="form-control" id="socialName" formcontrolname="socialName" />
                                    <div className="text-danger" >
                                        {!!socialNameCheck1 ? <div >dado obrigatório</div> : <div></div>}
                                        {!!socialNameCheck2 ? <div >deve ter no mínimo 2 caracteres</div> : <div></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="fantasyName">Nome Fantasia</label>
                                    <input type="text" className="form-control" placeholder="Nome Fantasia" id="fantasyName" formcontrolname="fantasyName" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="cnpj">*CNPJ</label>
                                    <MaskedInput className="form-control text-right" placeholder="CNPJ" mask="11.111.111/1111-11" id="cnpj" formcontrolname="cnpj" name="cnpj" size="18" onChange={(e) => { this.changeStateCNPJ(e.target.value); this.check(this.state.socialNameValue, e.target.value, this.state.categoryValue, this.state.telephoneValue);}} />
                                    <div className="text-danger">
                                        {!!cnpjCheck ? <div >CNPJ invalido ou obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="categoryId">Categoria</label>
                                    <select name="categoryId" id="categoryId" onChange={(e) => { this.changeStateCategory(e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, e.target.value, this.state.telephoneValue); }} formcontrolname="categoryId" className="form-control">
                                        <option>

                                        </option>
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
                                    <MaskedInput className="form-control text-right" placeholder="Agencia" mask="111-1" id="agency" formcontrolname="agency" name="agency" size="15"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="acount">Conta</label>
                                    <MaskedInput className="form-control text-right" placeholder="Conta" mask="11.111-1" id="acount" formcontrolname="acount" name="acount" size="15"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label htmlFor="email">E-Mail</label>
                                    <input type="text" placeholder="E-Mail" className="form-control" id="email" formcontrolname="email" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="telephone">Telefone</label>
                                    <MaskedInput className="form-control text-right" placeholder="telefone" mask="+55 11 11111-1111" id="telephone" formcontrolname="telephone" name="telephone" size="20" onChange={(e) => { this.changeStateTelephone(e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, this.state.categoryValue, e.target.value); }} />
                                    <div className="text-danger" >
                                        {!!telephoneChecked ? <div >dado obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" placeholder="Endereço" className="form-control" id="address" formcontrolname="address" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="city">Cidade</label>
                                    <input type="text" placeholder="Cidade" className="form-control" id="city" formcontrolname="city" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="province">Estado</label>
                                    <input type="text" placeholder="Estado" className="form-control" id="province" formcontrolname="province" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-3"> - Campos com * devem ser obrigatorios</div>
                        <div className="col-md-6"><button type="submit" disabled={!this.state.verified} className="btn btn-primary btn-lg float-right mt-3">Salvar</button></div>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormCompanies