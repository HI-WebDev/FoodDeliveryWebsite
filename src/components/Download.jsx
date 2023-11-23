import React from 'react'

const Download = (props) => {
    const { logo, alt, top, down } = props;
    return (
        <div className='col-auto download d-flex align-items-center ps-3 pe-3 pt-2 pb-2 me-4 mb-3 mb-lg-0'>
            <span className="logo me-2 mt-0 mb-0"><img className='img-fluid' src={logo} alt={alt} /></span>
            <div className="platform flex-column d-flex ">
                <h2 className="fw-bold mb-0">{top}</h2>
                <h1 className="fs-4 mb-0">{down}</h1>
            </div>
        </div>
    )
}

export default Download
