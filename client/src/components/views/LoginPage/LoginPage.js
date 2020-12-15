import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../../_actions/user_action';

function LoginPage({ history }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const body = { email, password };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        history.push('/');
      } else {
        alert('Login Error');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}>
      <form
        method='post'
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={submitHandler}>
        <label>Email</label>
        <input type='email' value={email} onChange={emailHandler} />
        <label>Password</label>
        <input type='password' value={password} onChange={passwordHandler} />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
