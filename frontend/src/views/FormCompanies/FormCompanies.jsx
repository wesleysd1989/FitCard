
import React, { Component } from 'react'

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
    check(){
        if (this.state.socialNameValue !== "" && this.state.cnpjValue !== ""){
            this.setState({ verified: true })
        } else {
            this.setState({ verified: false })
        }
    }
    changeState(valor) {
        if (valor === "ativa")
            this.setState({ ativa: "active", inativa: null })
        else if (valor === "inativa")
            this.setState({ ativa: null, inativa: "active" })
    }

    changeStateSocialName(value) {
        console.log(this.state.socialNameValue)
        this.check()
        this.setState({ socialNameValue: value })
        if(value === ""){
            this.setState({ socialNameCheck1: true })
        }
        else{
            this.setState({ socialNameCheck1: false })
        }
        if (value.length <= 1 && value.length > 0){
            this.setState({ socialNameCheck2: true })
            this.setState({ socialNameCheck1: false })
        }
        else {
            this.setState({ socialNameCheck2: false })
        }
    }

    changeStateCNPJ(value) {
        this.check()
        this.setState({ cnpjValue: value })
        console.log("funcao: " + this.state.cnpjValue)
        if(value === ""){
            this.setState({ cnpjCheck: true })
        }
        else{
            this.setState({ cnpjCheck: false })
        }
    }

    changeStateCategory(value) {
        this.check()
        this.setState({ categoryValue: value })
        if(value === "Categoria 2" && this.state.telephoneValue === ""){
            this.setState({ telephoneChecked: true })
        }
        else{
            this.setState({ telephoneChecked: false })
        }
    }

    changeStateTelephone(value) {
        this.check()
        this.setState({ telephoneValue: value })
        if(value === "" && this.state.categoryValue === "Categoria 2"){
            this.setState({ telephoneChecked: true })
        }
        else{
            this.setState({ telephoneChecked: false })
        }
    }

    onVerify() {
        this.setState({
            verified: true
        })
    }

    render() {
        console.log("render: " + this.state.cnpjValue)
        const socialNameCheck1 =  this.state.socialNameCheck1
        const socialNameCheck2 =  this.state.socialNameCheck2
        const cnpjCheck =  this.state.cnpjCheck
        const telephoneChecked =  this.state.telephoneChecked
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
                                    <input type="text"  onChange={(e) => this.changeStateSocialName(e.target.value)} className="form-control" id="socialName" formcontrolname="socialName" />
                                    <div className="text-danger" >
                                        {!!socialNameCheck1 ? <div >dado obrigatório</div> : <div></div> }
                                        {!!socialNameCheck2 ? <div >deve ter no mínimo 2 caracteres</div> : <div></div> }
                                    </div>
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
                                    <label htmlFor="cnpj">*CNPJ</label>
                                    <input type="text" onChange={(e) => this.changeStateCNPJ(e.target.value)} className="form-control text-right" id="cnpj" formcontrolname="cnpj" />
                                    <div className="text-danger">
                                        {!!cnpjCheck ? <div >dado obrigatório</div> : <div></div> }
                                    </div>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="categoryId">Categoria</label>
                                    <select name="categoryId" id="categoryId" onChange={(e) => this.changeStateCategory(e.target.value)} formcontrolname="categoryId" className="form-control">
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
                                    <input type="text" onChange={(e) => this.changeStateTelephone(e.target.value)} className="form-control text-right" id="telephone" formcontrolname="telephone" />
                                    <div className="text-danger" >
                                        {!!telephoneChecked ? <div >dado obrigatório</div> : <div></div> }
                                    </div>
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