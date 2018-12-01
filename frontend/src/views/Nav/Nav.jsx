
import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
                <a className="navbar-brand" href="#/">CAEP Teste</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#/">Empresas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/">Categorias</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Nav