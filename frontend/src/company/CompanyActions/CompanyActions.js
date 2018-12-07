
import { toastr } from 'react-redux-toastr'
import axios from 'axios'
const URL = 'http://localhost:3003/api';
export function registerCompany(values) {
    return submit(values, `${URL}/companies`)
}
export function updateCompany(values) {
    return change(values, `${URL}/companies/${values._id}`)
}
function change(values, url) {
    return dispatch => {
        axios.put(url, values)
            .then(resp => {
                dispatch([
                    { type: 'COMPANY', payload: resp.data }
                ])
                    toastr.success('Sucesso', "Item Editado com sucesso")
                
            })
            .catch(e => {
                e.response.data.errors.forEach(
                   error => toastr.error('Erro', error))
            })
    }
}
function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: 'COMPANY', payload: resp.data }
                ])
                toastr.success('Sucesso', "Item Cadastrado com sucesso")
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}