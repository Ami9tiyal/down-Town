import React from 'react'
import { Form } from 'react-bootstrap'
import './Locationbar.css'
const Locationbar = () => {
    // const gotLocation = (position) => {
    //     console.log(position)

    // }

    // const failedToGetLocation = () => {
    //     console.log("failed to get location")
    // }

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation)
    //     }
    // }, [])
    return (
        <>
            <header className="location_bar">
                <Form.Control placeholder='Location' className='location_input' />
            </header>
        </>
    )
}

export default Locationbar