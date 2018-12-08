
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import {format} from 'date-fns'

import { registerCompany, updateCompany } from "../../company/CompanyActions";
import Messages from '../../common/Messages/'
import Input from '../Form/'
import MaskedInput from 'react-maskedinput'
import cnpjValidatior from "@fnando/cnpj/dist/node";
// eslint-disable-next-line
import { isValid as isValidCnpj } from "@fnando/cnpj";

const URL = 'http://localhost:3003/api/categories';
const emailRegex = /\S+@\S+\.\S+/

class FormCompanies extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ativa: true,
            verified: false,
            socialNameCheck1: false,
            emailMsg: false,
            cnpjCheck: false,
            telephoneChecked: false,
            socialNameValue: "",
            cnpjValue: "",
            telephoneValue: "",
            categoryValue: "",
            list: [],
            fireRedirect: false
        }
        this.refresh()
    }

    testEmail(email){
        if(!email.match(emailRegex)){
            this.setState({ emailMsg: true })
            setTimeout(() => {
                this.check(this.state.socialNameValue, this.state.cnpjValue, this.state.categoryValue, this.state.telephoneValue)
            }, 1000);
        }else{
            this.setState({ emailMsg: false })
            setTimeout(() => {
                this.check(this.state.socialNameValue, this.state.cnpjValue, this.state.categoryValue, this.state.telephoneValue)
            }, 1000);
        }
                
        if(email.length <= 0){
            this.setState({ emailMsg: false })
            setTimeout(() => {
                this.check(this.state.socialNameValue, this.state.cnpjValue, this.state.categoryValue, this.state.telephoneValue)
            }, 1000);
        }
    }

    componentDidMount(){
        this.loadEdit()
    }

    loadEdit() {
        if (this.props.company === null) {
            const date = format(new Date(), 'HH:mm DD/MM/YYYY')
            this.props.change("status", true)
            this.props.change("registerDate", date)
        }
        else {

            if(this.props.company.socialName === undefined){
                this.setState({ socialNameValue: "" })
            }else{
                this.setState({ socialNameValue: this.props.company.socialName })
            }

            if(this.props.company.cnpj === undefined){
                this.setState({ cnpjValue: "" })
            }else{
                this.setState({ cnpjValue: this.props.company.cnpj })
            }

            if(this.props.company.telephone === undefined){
                this.setState({ telephoneValue: "" })
            }else{
                this.setState({ telephoneValue: this.props.company.telephone })
            }

            if(this.props.company.category === undefined){
                this.setState({ categoryValue: "" })
            }else{
                this.setState({ categoryValue: this.props.company.category })
            }
            
            this.props.change("_id", this.props.company._id)
            this.props.change("status", this.props.company.status)
            this.props.change("socialName", this.props.company.socialName)
            this.props.change("fantasyName", this.props.company.fantasyName)
            this.props.change("cnpj", this.props.company.cnpj)
            this.props.change("category", this.props.company.category)
            this.props.change("agency", this.props.company.agency)
            this.props.change("account", this.props.company.account)
            this.props.change("email", this.props.company.email)
            this.props.change("telephone", this.props.company.telephone)
            this.props.change("registerDate", this.props.company.registerDate)
            this.props.change("address", this.props.company.address)
            this.props.change("city", this.props.company.city)
            this.props.change("province", this.props.company.province)
        }
    }

    checkEdit(){
        if (this.state.socialNameValue !== "" && cnpjValidatior.isValid(this.state.cnpjValue) !== false) {
            if (this.state.categoryValue === "Supermercado" && this.state.telephoneValue === "")
                this.setState({ verified: false })
            else if (this.state.categoryValue === "Supermercado" && this.state.telephoneValue !== "" ){
                this.setState({ verified: true })
            }
            else if (this.state.categoryValue !== "Supermercado"){
                this.setState({ verified: true })
            }
        } else {
            this.setState({ verified: false })
        }
    }

    check(socialName, cnpj, categoria, telephone) {
        const { emailMsg } = this.state;
        if(socialName === undefined){
            socialName = ""
        }
        if(cnpj === undefined){
            cnpj = ""
        }
        if(categoria === undefined){
            categoria = ""
        }
        if(telephone === undefined){
            telephone = ""
        }
        
        if (socialName !== "" && cnpjValidatior.isValid(cnpj) !== false) {
            if (categoria === "Supermercado" && telephone === ""){
                    this.setState({ verified: false })
            }else if (categoria === "Supermercado" && telephone !== "" ){
                if(!emailMsg){
                    this.setState({ verified: true })
                }else{
                    this.setState({ verified: false })
                }
            }
            else if (categoria !== "Supermercado"){
                if(!emailMsg){
                    this.setState({ verified: true })
                }else{
                    this.setState({ verified: false })
                }
            }
        } else {
            this.setState({ verified: false })
        }
    }

    changeStateSocialName(value) {
        this.setState({ socialNameValue: value })
        if (value === "") {
            this.setState({ socialNameCheck1: true })
        }
        else {
            this.setState({ socialNameCheck1: false })
        }
    }

    changeStateCategory(value) {
        this.setState({ categoryValue: value })
        if (value === "Supermercado" && this.state.telephoneValue === "") {
            this.setState({ telephoneChecked: true })
        }
        else if(value !== "Supermercado") {
            this.setState({ telephoneChecked: false })
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
    
    refresh() {
        axios.get(`${URL}?sort=-createdAt$`)
            .then(resp => this.setState({ ...this.state, list: resp.data }))
    }

    changeStateTelephone(value) {
        this.setState({ telephoneValue: value })
        if (value === "" && this.state.categoryValue === "Supermercado") {
            this.setState({ telephoneChecked: true })
        }
        else {
            this.setState({ telephoneChecked: false })
        }
    }

    renderCategories = () => {
        const list = this.state.list || []
        return list.map((category, index) => (
                <option key={index}> 
                    {category.name}
                </option>
        ))
    }

    onSubmit(values) {
        const { registerCompany } = this.props
        registerCompany(values)
        this.setState({ fireRedirect: true })
    }

    onSubmitEdit(values) {
        const { updateCompany } = this.props
        updateCompany(values)
        this.setState({ fireRedirect: true })
    }

    render() {
        const { fireRedirect, telephoneChecked, cnpjCheck, socialNameCheck1, emailMsg } = this.state
        const { handleSubmit, company } = this.props
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
                {!!company ?
                <form onSubmit={handleSubmit(v => this.onSubmitEdit(v))} >
                    <div className="card">
                        <div className="card-header">
                            Informações sobre a empresa
                        </div>
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="status">Status da empresa</label>
                                    <Field component={Input} type="hidden" className="form-control" id="_id" name="_id" />
                                    <div className="form-check form-check-inline">
                                        <Field type="radio" name="status" component="input" value="true" onChange={(e) => { this.setState({ ativa: !this.state.ativa }); this.checkEdit(); }}  />
                                        <label className="form-check-label mx-1" htmlFor="yesRadios">
                                            Ativa
                                    </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field type="radio" name="status" component="input" value="false" onChange={(e) => { this.setState({ ativa: !this.state.ativa }); this.checkEdit(); }}  />
                                        <label className="form-check-label mx-1" htmlFor="noRadios">
                                            Inativa
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="socialName">*Razão Social</label>
                                        <Field type="text" component={Input} placeholder="Razão Social" onChange={(e) => { this.changeStateSocialName(e.target.value); this.check(e.target.value, this.state.cnpjValue, this.state.categoryValue, this.state.telephoneValue); }} className="form-control" id="socialName" name="socialName" />
                                    <div className="text-danger" >
                                        {!!socialNameCheck1 ? <div >dado obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="fantasyName">Nome Fantasia</label>
                                    <Field type="text" component={Input} className="form-control" onChange={(e) => { this.checkEdit(); }} placeholder="Nome Fantasia" id="fantasyName" name="fantasyName" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="cnpj">*CNPJ</label>
                                    <Field component={Input} type="hidden" name="cnpj" />
                                        <MaskedInput className="form-control text-right" value={company.cnpj} placeholder="CNPJ" mask="11.111.111/1111-11" id="cnpj" size="18" onChange={(e) => { this.changeStateCNPJ(e.target.value); this.check(this.state.socialNameValue, e.target.value, this.state.categoryValue, this.state.telephoneValue); this.props.change("cnpj", e.target.value)}} />
                                    <div className="text-danger">
                                        {!!cnpjCheck ? <div >CNPJ invalido ou obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="category">Categoria</label>
                                    <Field component={Input} type="hidden" name="category" />
                                    <select name="category" id="category"  onChange={(e) => { this.changeStateCategory(e.target.value);  this.props.change("category", e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, e.target.value, this.state.telephoneValue); }} formcontrolname="categoryId" className="form-control">
                                        <option >
                                            {company.category}
                                        </option>
                                        {this.renderCategories()}
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="agency">Agencia</label>
                                    <Field component={Input} type="hidden" name="agency" />
                                    <MaskedInput className="form-control text-right" value={company.agency} onChange={(e) => { this.props.change("agency", e.target.value); this.checkEdit(); this.props.change("agency", e.target.value) }} placeholder="Agencia" mask="111-1" id="agency" name="agency" size="15" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="account">Conta</label>
                                    <Field component={Input} type="hidden" name="account" />
                                    <MaskedInput className="form-control text-right" value={company.account} onChange={(e) => { this.checkEdit(); this.props.change("account", e.target.value) }} placeholder="Conta" mask="11.111-1" id="account" name="account" size="15" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-7">
                                    <label htmlFor="email">E-Mail</label>
                                    <Field component={Input} type="text" placeholder="E-Mail" onChange={(e) => { this.checkEdit(); }} className="form-control" id="email" name="email" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="telephone">Telefone</label>
                                    <Field component={Input} type="hidden" name="telephone" />
                                    <MaskedInput className="form-control text-right" value={company.telephone} placeholder="telefone" mask="+55 11 11111-1111" id="telephone" name="telephone" size="20" onChange={(e) => { this.changeStateTelephone(e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, this.state.categoryValue, e.target.value);this.props.change("telephone", e.target.value) }} />
                                    <div className="text-danger" >
                                        {!!telephoneChecked ? <div >dado obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="email">Data Cadastro</label>
                                    <Field component={Input} type="text" disabled className="form-control" id="registerDate" name="registerDate" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label htmlFor="address">Endereço</label>
                                    <Field component={Input} type="text" onChange={(e) => { this.checkEdit(); }} placeholder="Endereço" className="form-control" id="address" name="address" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="city">Cidade</label>
                                    <Field component={Input} type="text" onChange={(e) => { this.checkEdit(); }} placeholder="Cidade" className="form-control" id="city" name="city" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="province">Estado</label>
                                    <Field component={Input} type="text" placeholder="Estado" onChange={(e) => { this.checkEdit(); }} className="form-control" id="province" name="province" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-3"> - Campos com * devem ser obrigatorios</div>
                        <div className="col-md-6">
                            <button type="submit" disabled={!this.state.verified} className="btn btn-primary btn-lg float-right mt-3">Editar</button>
                            {fireRedirect && (
                            <Redirect to={'/companies'} />
                            )}
                        </div>
                    </div>
                </form>
                :
                <form onSubmit={handleSubmit(v => this.onSubmit(v))} >
                    <div className="card">
                        <div className="card-header">
                            Informações sobre a empresa
                        </div>
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <label htmlFor="status">Status da empresa</label>
                                    <div className="form-check form-check-inline">
                                        <Field type="radio" name="status" component="input" value="true" onChange={(e) => { this.setState({ ativa: !this.state.ativa }) }} checked={this.state.ativa} />
                                        <label className="form-check-label mx-1" htmlFor="yesRadios">
                                            Ativa
                                    </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Field type="radio" name="status" component="input" value="false" onChange={(e) => { this.setState({ ativa: !this.state.ativa }) }} checked={!this.state.ativa} />
                                        <label className="form-check-label mx-1" htmlFor="noRadios">
                                            Inativa
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="socialName">*Razão Social</label>
                                        <Field type="text" component={Input} placeholder="Razão Social"onChange={(e) => { this.changeStateSocialName(e.target.value); this.check(e.target.value, this.state.cnpjValue, this.state.categoryValue, this.state.telephoneValue); }} className="form-control" id="socialName" name="socialName" />
                                    <div className="text-danger" >
                                        {!!socialNameCheck1 ? <div >dado obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="fantasyName">Nome Fantasia</label>
                                    <Field type="text" component={Input} className="form-control" placeholder="Nome Fantasia" id="fantasyName" name="fantasyName" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="cnpj">*CNPJ</label>
                                    <Field component={Input} type="hidden" name="cnpj" />
                                    <MaskedInput className="form-control text-right" placeholder="CNPJ" mask="11.111.111/1111-11" id="cnpj" name="cnpj" size="18" onChange={(e) => { this.changeStateCNPJ(e.target.value); this.check(this.state.socialNameValue, e.target.value, this.state.categoryValue,this.props.change("cnpj", e.target.value), this.state.telephoneValue); }} />
                                    <div className="text-danger">
                                        {!!cnpjCheck ? <div >CNPJ invalido ou obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="categoryId">Categoria</label>
                                    <Field component={Input} type="hidden" name="category" />
                                    <select name="category" id="category" onChange={(e) => { this.changeStateCategory(e.target.value);this.props.change("category", e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, e.target.value, this.state.telephoneValue); }} formcontrolname="categoryId" className="form-control">
                                        <option>

                                        </option>
                                        {this.renderCategories()}
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="agency">Agencia</label>
                                    <Field component={Input} type="hidden" name="agency" />
                                    <MaskedInput className="form-control text-right" onChange={(e) => { this.props.change("agency", e.target.value) }} placeholder="Agencia" mask="111-1" id="agency" name="agency" size="15" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="account">Conta</label>
                                    <Field component={Input} type="hidden" name="account" />
                                    <MaskedInput className="form-control text-right" onChange={(e) => { this.props.change("account", e.target.value) }} placeholder="Conta" mask="11.111-1" id="account" name="account" size="15" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-7">
                                    <label htmlFor="email">E-Mail</label>
                                    <Field component={Input} type="text" placeholder="E-Mail" onChange={(e) => { this.testEmail(e.target.value) }} className="form-control" id="email" name="email" />
                                    <div className="text-danger" >
                                        {!!emailMsg ? <div >E-Mail invalido</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="telephone">Telefone</label>
                                    <Field component={Input} type="hidden" name="telephone" />
                                    <MaskedInput className="form-control text-right" placeholder="telefone" mask="+55 11 11111-1111" id="telephone" name="telephone" size="20" onChange={(e) => { this.props.change("telephone", e.target.value); this.changeStateTelephone(e.target.value); this.check(this.state.socialNameValue, this.state.cnpjValue, this.state.categoryValue, e.target.value); }} />
                                    <div className="text-danger" >
                                        {!!telephoneChecked ? <div >dado obrigatório</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="registerDate">Data Cadastro</label>
                                    <Field component={Input} type="text" disabled className="form-control" id="registerDate" name="registerDate" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-5">
                                    <label htmlFor="address">Endereço</label>
                                    <Field component={Input} type="text" placeholder="Endereço" className="form-control" id="address" name="address" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="city">Cidade</label>
                                    <Field component={Input} type="text" placeholder="Cidade" className="form-control" id="city" name="city" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="province">Estado</label>
                                    <Field component={Input} type="text" placeholder="Estado" className="form-control" id="province" name="province" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-3"> - Campos com * devem ser obrigatorios</div>
                        <div className="col-md-6">
                            <button type="submit" disabled={!this.state.verified} className="btn btn-primary btn-lg float-right mt-3">Salvar</button>
                            {fireRedirect && (
                            <Redirect to={'/companies'} />
                            )}
                        </div>
                    </div>
                </form>
                }
                <Messages />
            </div>
        )
    }
}
FormCompanies = reduxForm({ form: 'companiesForm' })(FormCompanies)
const mapStateToProps = state => ({ company: state.edit.edit })
const mapDispatchToProps = dispatch => bindActionCreators({ registerCompany, updateCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormCompanies)