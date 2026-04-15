import React, { useState } from 'react'

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setMobile] = useState("")
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='mb-3'>
                        <h1>Register</h1>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" class="form-label">Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <button className='btn btn-success'>Register</button>
                </div>
            </div>
        </div>
    )
}
