
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Messages from '../../common/Messages/'
import Input from '../Form/'

class FormCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verified: false,
            categoryCheck1: false,
            categoryCheck2: false,
            categoryValue: ""
        }
    }

    changeCategoryName(value) {
        this.setState({ categoryValue: value })
        if (value === "") {
            this.setState({ categoryCheck1: true })
        }
        else {
            this.setState({ categoryCheck1: false })
        }
        if (value.length <= 1 && value.length > 0) {
            this.setState({ categoryCheck2: true })
            this.setState({ categoryCheck1: false })
        }
        else {
            this.setState({ categoryCheck2: false })
        }
    }

    check(categoria) {
            if (categoria === "" || categoria.length <=1)
                this.setState({ verified: false })
            else 
                this.setState({ verified: true })
    }

    render() {
        const categoryCheck1 = this.state.categoryCheck1
        const categoryCheck2 = this.state.categoryCheck2
        const category = this.props.category
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
                                    {!!category ?
                                    <input type="text" className="form-control" defaultValue={category.name} onChange={(e) => { this.changeCategoryName(e.target.value); this.check(e.target.value); }} id="name" formcontrolname="name" />
                                    :
                                    <input type="text" className="form-control" onChange={(e) => { this.changeCategoryName(e.target.value); this.check(e.target.value); }} id="name" formcontrolname="name" />
                                    }
                                    <div className="text-danger" >
                                        {!!categoryCheck1 ? <div >dado obrigatório</div> : <div></div>}
                                        {!!categoryCheck2 ? <div >deve ter no mínimo 2 caracteres</div> : <div></div>}
                                    </div>
                                </div>
                                <div className="form-group col-md-8">
                                    <label htmlFor="description">Descrição</label>
                                    {!!category ?
                                    <input type="text" className="form-control" defaultValue={category.description} onChange={(e) => { this.check(e.target.value); }} id="description" formcontrolname="description" />
                                    :
                                    <input type="text" className="form-control" id="description" formcontrolname="description" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {!!category ? 
                    <button type="submit" disabled={!this.state.verified} className="btn btn-primary btn-lg float-right mt-3">Editar</button> 
                    : 
                    <button type="submit" disabled={!this.state.verified} className="btn btn-primary btn-lg float-right mt-3">Salvar</button>
                    }
                </form>
            </div>
        )
    }
}
FormCategories = reduxForm({ form: 'categoriesForm' })(FormCategories)
const mapStateToProps = state => ({ category: state.edit.edit })
const mapDispatchToProps = dispatch => bindActionCreators({  },dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormCategories)