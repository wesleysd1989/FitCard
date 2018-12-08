import React from 'react'
import If from '../../containers/If'
export default props => (
    <If test={!props.hide}>
        <div>
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type}
                disabled={props.disabled} />
        </div>
    </If>
)