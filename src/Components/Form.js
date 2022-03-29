import React from 'react';

const Form = (props) => {

    const onChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return (<form onSubmit={onSubmit}>
        <label>Name
            <input
                placeholder='Enter Name'
                name='name'
                value={props.values.name}
                onChange={onChange}
            />
        </label>
        <label>Email
            <input
                placeholder='Enter Email'
                name='email'
                value={props.values.email}
                onChange={onChange}
            />
        </label>
        <label>Role
            <input
                placeholder='Enter Role'
                name='role'
                value={props.values.role}
                onChange={onChange}
            />
        </label>
        <input type='submit' value='Create Your Team' />
    </form>
    )
}

export default Form;