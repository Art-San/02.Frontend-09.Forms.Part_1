import React, { useState, useEffect } from 'react'
import TextField from '../components/TextField'

// form>(div>label+input)*2

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({}) // Отображение ошибки валидации // не забываем передавать дефолт объект
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
        return Object.keys(errors).length !== 0
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email} // Отображение ошибки валидации
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password} // Отображение ошибки валидации
            />
            <button>Отправить</button>
        </form>
    )
}

export default Login
