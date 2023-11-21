import React from 'react'

const Folists = (props) => {
    const { title, items } = props;
    return (
        <>
            <ul>
                <li className='text-capitalize list-unstyled ms-4 mb-3 text-light fw-bold'>{title}</li>
                {items.map((item) => {
                    return <li  className='text-capitalize list-unstyled ms-4 mb-3 text-white-50'>{item}</li>
                })}
            </ul>
        </>
    )
}

export default Folists
