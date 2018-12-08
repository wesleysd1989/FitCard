
import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from "../../consts";
export function registerCategory(values) {
    return submit(values, `${consts.API_URL}/categories`)
}
export function updateCategory(values) {
    return change(values, `${consts.API_URL}/categories/${values._id}`)
}
function change(values, url) {
    return dispatch => {
        axios.put(url, values)
            .then(resp => {
                dispatch([
                    { type: 'CATEGORY', payload: resp.data }
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
                    { type: 'CATEGORY', payload: resp.data }
                ])
                toastr.success('Sucesso', "Item Cadastrado com sucesso")
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}