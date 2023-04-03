import React, { useState } from 'react'

// form>(div>label+input)*2

const Login = () => {
  // const [email, setEmail] = useState('') // можно так дя каждого поля свое состояние
  // const [password, setPassword] = useState('')
  const [data, setData] = useState({ email: '', password: '' })
  const handleChange = ({ target }) => {
    setData((prevState) => ({
        ...prevState,
        [target.name]: target.value
      }))
    // console.log(e.target.value)
  }

  // Получаем предыдущие состояние "prevState" в ответ возвращаем объект,
  // который будет состоять из предыдущего состояния. И нам необходимо изменить данные нашего поля.
  // Для этого мы обращаемся к полю как [e.target.name]: и записываем данные из event.target.value

  return (
    <form action="">
        <div>
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
        </div>
    </form>
  )
}

export default Login
