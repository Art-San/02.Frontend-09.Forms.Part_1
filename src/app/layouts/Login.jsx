import React, { useState } from 'react'

// form>(div>label+input)*2

const Login = () => {
  const [email, setEmail] = useState('')
  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }
// d первом случае мы можем получит доступ к значениям и ролучать события об обновление поля
  // На данный момент поле "Емаил" является контролируемым с точки зрения реакта
  // потому что мы можем получять изменнения и указыват значения

// во втором случае это поле сущ. само по себе в дереве элементов браузера
  // Второе "password" не контролируемое

  return (
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id='email'
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <input type="password" id='password' />
      </div>
    </form>
  )
}

export default Login
