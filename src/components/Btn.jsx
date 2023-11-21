import React from 'react'

const Btn = (props) => {
    const { text, bg } = props;
    return (
        <div className='Mbutton'>
            <button style={{ backgroundColor: bg , color: '#fff' }} className="btn rounded-pill text-capitalize fw-bold" type="button" id="button-addon2">
                {text}
            </button>
        </div>
    )
}

export default Btn
