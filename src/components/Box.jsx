import React from 'react'

const Box = (props) => {
    const { logo, size, text } = props;

    return (
        <>
            <div className="box flex-column pt-5 pb-4">
                <div className="icon text-center mb-3 ms-auto me-auto p-3" style={{ borderRadius: size, width: 'fit-content' }}>
                    <img className='img-fluid' src={logo} alt="location" />
                </div>
                <h2 className="fs-4 text-center me-lg-5 ms-lg-5">{text}</h2>
            </div>
        </>
    )
}

export default Box
