
import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from "../../consts";
export function registerCompany(values) {
    return submit(values, `${consts.API_URL}/companies`)
}
export function updateCompany(values) {
    return change(values, `${consts.API_URL}/companies/${values._id}`)
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