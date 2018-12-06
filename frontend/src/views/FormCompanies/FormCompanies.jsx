
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import Messages from '../../common/Messages/'
import Input from '../Form/'
import MaskedInput from 'react-maskedinput'
import cnpjValidatior from "@fnando/cnpj/dist/node";
// eslint-disable-next-line
import { isValid as isValidCnpj } from "@fnando/cnpj";

const URL = 'http://localhost:3003/api/categories';

class FormCompanies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ativa: true,
            verified: false,
            socialNameCheck1: false,
            socialNameCheck2: false,
            cnpjCheck: false,
            telephoneChecked: false,
            socialNameValue: "",
            cnpjValue: "",
            telephoneValue: "",
            categoryValue: "",
            list: []
        }
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt$`)
            .then(resp => this.setState({ ...this.state, list: resp.data }))
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

    renderCategories = () => {
        const list = this.state.list || []
        return list.map(category => (
                <option key={category._id}>
                    {category.name}
                </option>
        ))
    }

    render() {
        const socialNameCheck1 = this.state.socialNameCheck1
        const socialNameCheck2 = this.state.socialNameCheck2
        const cnpjCheck = this.state.cnpjCheck
        const telephoneChecked = this.state.telephoneChecked
        const company = this.props.company
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
                                    <div className="form-check form-check-inline">
                                        <Field type="radio" name="newsletter" component="input" value="true" onChange={(e) => { this.setState({ ativa: !this.state.ativa }) }} checked={this.state.ativa} />
                                        <label className="form-check-label mx-1" htmlFor="yesRadios">
                                            Ativa
                                    </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field type="radio" name="newsletter" component="input" value="false" onChange={(e) => { this.setState({ ativa: !this.state.ativa }) }} checked={!this.state.ativa} />
                                        <label className="form-check-label mx-1" htmlFor="noRadios">
                                            Inativa
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="socialName">*Razão Social</label>
                                    {!!company ?
                                        <input type="text" placeholder="Razão Social" defaultValue={company.socialName} onChange={(e) => { this.changeStateSocialName(e.target.value); this.check(e.target.value, this.state.cnpjValue, this.state.categoryValue, this.state.telephoneValue); }} className="form-control" id="socialName" formcontrolname="socialName" />
                                        :
                                        <input type="text" placeholder="Razão Social" onChange={(e) => { this.changeStateSocialName(e.target.value); this.check(e.target.value, this.state.cnpjValue, this.state.categoryValue, this.state.telephoneValue); }} className="form-control" id="socialName" formcontrolname="socialName" />
                                    }
                                    <div className="text-danger" >
                                        {!!socialNameCheck1 ? <div >dado obrigatório</div> : <div></div>}
                                        {!!socialNameCheck2 ? <div >deve ter no mínimo 2 caracteres</div> : <div></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="fantasyName">Nome Fantasia</label>
                                    {!!company ?
                                        <input type="text" className="form-control" defaultValue={company.fantasyName} placeholder="Nome Fantasia" id="fantasyName" formcontrolname="fantasyName" />
                                        :
                                        <input type="text" className="form-control" placeholder="Nome Fantasia" id="fantasyName" formcontrolname="fantasyName" />
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="cnpj">*CNPJ</label>
                                    {!!company ?
                                        <MaskedInput className="form-control text-right" value={company.cnpj} placeholder="CNPJ" mask="11.111.111/1111-11" id="cnpj" formcontrolname="cnpj" name="cnpj" size="18" onChange={(e) => { this.changeStateCNPJ(e.target.value); this.check(this.state.socialNameValue, e.target.value, this.state.categoryValue, this.state.telephoneValue); }} />
                                        :
                                        <MaskedInput className="form-control text-right" placeholder="CNPJ" mask="11.111.111/1111-11" id="cnpj" formcontrolname="cnpj" name="cnpj" size="18" onChange={(e) => { this.changeStateCNPJ(e.target.value); this.check(this.state.socialNameValue, e.target.value, this.state.categoryValue, this.state.telephoneValue); }} />
                                    }
                                    <div className="text-danger">
                                        {!!cnpjCheck ? <div >CNPJ invalido ou obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="categoryId">Categoria</label>
                                    {!!company ?
                                    <select name="categoryId" id="categoryId"  onChange={(e) => { this.changeStateCategory(e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, e.target.value, this.state.telephoneValue); }} formcontrolname="categoryId" className="form-control">
                                        <option value={company.categoryId}>
                                            {company.category}
                                        </option>
                                        {this.renderCategories()}
                                    </select>
                                    :
                                    <select name="categoryId" id="categoryId" onChange={(e) => { this.changeStateCategory(e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, e.target.value, this.state.telephoneValue); }} formcontrolname="categoryId" className="form-control">
                                        <option>

                                        </option>
                                        {this.renderCategories()}
                                    </select>
                                    }
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="agency">Agencia</label>
                                    {!!company ?
                                        <MaskedInput className="form-control text-right" value={company.agency} placeholder="Agencia" mask="111-1" id="agency" formcontrolname="agency" name="agency" size="15" />
                                        :
                                        <MaskedInput className="form-control text-right" placeholder="Agencia" mask="111-1" id="agency" formcontrolname="agency" name="agency" size="15" />
                                    }
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="acount">Conta</label>
                                    {!!company ?
                                        <MaskedInput className="form-control text-right" value={company.acount} placeholder="Conta" mask="11.111-1" id="acount" formcontrolname="acount" name="acount" size="15" />
                                        :
                                        <MaskedInput className="form-control text-right" placeholder="Conta" mask="11.111-1" id="acount" formcontrolname="acount" name="acount" size="15" />
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label htmlFor="email">E-Mail</label>
                                    {!!company ?
                                        <input type="text" placeholder="E-Mail" defaultValue={company.email} className="form-control" id="email" formcontrolname="email" />
                                        :
                                        <input type="text" placeholder="E-Mail" className="form-control" id="email" formcontrolname="email" />
                                    }
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="telephone">Telefone</label>
                                    {!!company ?
                                        <MaskedInput className="form-control text-right" value={company.telephone} placeholder="telefone" mask="+55 11 11111-1111" id="telephone" formcontrolname="telephone" name="telephone" size="20" onChange={(e) => { this.changeStateTelephone(e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, this.state.categoryValue, e.target.value); }} />
                                        :
                                        <MaskedInput className="form-control text-right" placeholder="telefone" mask="+55 11 11111-1111" id="telephone" formcontrolname="telephone" name="telephone" size="20" onChange={(e) => { this.changeStateTelephone(e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, this.state.categoryValue, e.target.value); }} />
                                    }
                                    <div className="text-danger" >
                                        {!!telephoneChecked ? <div >dado obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label htmlFor="address">Endereço</label>
                                    {!!company ?
                                        <input type="text" placeholder="Endereço" defaultValue={company.address} className="form-control" id="address" formcontrolname="address" />
                                        :
                                        <input type="text" placeholder="Endereço" className="form-control" id="address" formcontrolname="address" />
                                    }
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="city">Cidade</label>
                                    {!!company ?
                                        <input type="text" placeholder="Cidade" defaultValue={company.city} className="form-control" id="city" formcontrolname="city" />
                                        :
                                        <input type="text" placeholder="Cidade" className="form-control" id="city" formcontrolname="city" />
                                    }
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="province">Estado</label>
                                    {!!company ?
                                        <input type="text" placeholder="Estado" defaultValue={company.province} className="form-control" id="province" formcontrolname="province" />
                                        :
                                        <input type="text" placeholder="Estado" className="form-control" id="province" formcontrolname="province" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-3"> - Campos com * devem ser obrigatorios</div>
                        <div className="col-md-6">
                            {!!company ?
                                <button type="submit" disabled={!this.state.verified} className="btn btn-primary btn-lg float-right mt-3">Editar</button>
                                :
                                <button type="submit" disabled={!this.state.verified} className="btn btn-primary btn-lg float-right mt-3">Salvar</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
FormCompanies = reduxForm({ form: 'companiesForm' })(FormCompanies)
const mapStateToProps = state => ({ company: state.edit.edit })
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormCompanies)