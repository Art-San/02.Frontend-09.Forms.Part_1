import React, { useState } from 'react'
import TextField from '../components/TextField'

// form>(div>label+input)*2

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const handleChange = ({ target }) => {
    setData((prevState) => ({
        ...prevState,
        [target.name]: target.value
      }))
  }

  return (
    <form action="">
        <TextField
            label='Электронная почта'
            // type="text" // передали его подефолту в PropTypes в TextField
            name='email'
            value={data.email}
            onChange={handleChange}
          />
          <TextField
            label='Пароль'
            type="password"
            name='password'
            value={data.password}
            onChange={handleChange}
          />
        {/* <div>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                id='email'
                name='email'
                value={data.email}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="password">Пароль</label>
            <input
                type="password"
                id='password'
                name='password'
                value={data.password}
                onChange={handleChange}/>
        </div> */}
    </form>
  )
}

export default Login
