import React from 'react';


export default function Form(props) {

    const onChange = evt => {
        const { name, value } = evt.target
        props.change(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    <form onSubmit={onSubmit}>
        <label>Name
            <input
                placeholder='Enter Name'
                type='text'
                name='name'
                value={props.values.name}
                onChange={onChange}
            />
        </label>Email
        <label>
            <input
                placeholder='Enter Email'
                type='email'
                name='email'
                value={props.values.email}
                onChange={onChange}
            />
        </label>
        <label>Role
            <input
                placeholder='Enter Role'
                type='text'
                name='role'
                value={props.values.name}
                onChange={onChange}
            />
        </label>
        <input type='submit' value='Create Your Team' />
    </form>

}