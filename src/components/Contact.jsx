import React from 'react'
import { CONTACT } from '../constants'

export const Contact = () => {
    return (
        <div>
            <h2 className='my-5 flex justify-center text-4xl font-bold p-2'>Current Location</h2>
            <div className='mb-8 justify-center flex flex-col items-center'>
                <p>{CONTACT.address}</p>
                {/* <p>{CONTACT.email}</p> */}
            </div>

        </div>
    )
}
