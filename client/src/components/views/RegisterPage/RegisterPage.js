import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../../_actions/user_action';

function LoginPage({ history }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }
    const body = {
      email,
      name,
      password,
      confirmPassword,
    };
    dispatch(registerUser(body)).then((response) => {
      console.log(response);
      if (response.payload.registerSuccess) {
        history.push('/login');
      } else {
        const message = response.payload.message;
        alert(message);
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
        <label>Name</label>
        <input type='text' value={name} onChange={nameHandler} />
        <label>Password</label>
        <input type='password' value={password} onChange={passwordHandler} />
        <label>Confirm Password</label>
        <input
          type='password'
          value={confirmPassword}
          onChange={confirmPasswordHandler}
        />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
