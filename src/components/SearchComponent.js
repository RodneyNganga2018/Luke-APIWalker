import 'C:/Users/rngan/Documents/CodingDojo/MERN/React/react_routing/luke-apiwalker/node_modules/bootstrap/dist/css/bootstrap.css';
import styles from './SearchComponent.module.css';

import React, {useState} from 'react';
import {navigate} from '@reach/router';

const SearchComponent = (props) => {
    const [form, setForm] = useState({
        resource:'planets',
        id: ''
    })

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (form.id!=='') {
            navigate(`/${form.resource}/${form.id}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formGroup}>
            <label className='me-2'>Search for:</label>
            <select name="resource" value={form.resource} onChange={handleChange} className={styles.formInput}>
                <option>planets</option>
                <option>people</option>
            </select>
            <label className='mx-2'>ID:</label>
            <input name="id" value={form.id} onChange={handleChange} className={styles.formInput} />
            <button type="submit" className='btn-sm btn-primary ms-2'>Search</button>
        </form>
    )
}

export default SearchComponent;