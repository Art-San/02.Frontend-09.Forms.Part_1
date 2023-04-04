import React, { useState, useEffect } from 'react'
import TextField from '../components/TextField'

// form>(div>label+input)*2

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState('')
    console.log('errors', errors)
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = {}
        for (const fieldName in data) {
            if (data[fieldName].trim() === '') {
                errors[fieldName] = `${fieldName} обязательно для заполнения`
            }
        }
        setErrors(errors)
        return Object.keys(errors).length !== 0 // Базовая валидация var2
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // validate() // Базовая валидация var1
        // if (Object.keys(errors).length !== 0) return var1
        const isValid = validate() // Базовая валидация var2
        if (!isValid) return // Базовая валидация var2
        console.log(data) // Базовая валидация var2
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <button>Отправить</button>
        </form>
    )
}

export default Login
