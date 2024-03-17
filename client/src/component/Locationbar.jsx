import React from 'react'
import { Form } from 'react-bootstrap'
import './Locationbar.css'
const Locationbar = () => {
    return (
        <>
            <div className="location_bar">
                <Form.Control placeholder='Location' className='location_input'>

                </Form.Control>
            </div>
        </>
    )
}

export default Locationbar