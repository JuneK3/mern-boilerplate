import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../../_actions/user_action';
import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 3,
    },
  },
};

function RegisterPage({ history }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
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
      lastName,
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}>
      <Title level={2}>Sign Up</Title>
      <Form
        style={{
          width: '375px',
          display: 'inline-block',
          textAlign: 'center',
        }}
        {...formItemLayout}>
        <Form.Item required label='Name'>
          <Input
            id='name'
            placeholder='Enter your name'
            type='text'
            value={name}
            onChange={nameHandler}
            className='text-input'
          />
        </Form.Item>
        <Form.Item required label='Last Name'>
          <Input
            id='lastName'
            placeholder='Enter your Last Name'
            type='text'
            value={lastName}
            onChange={lastNameHandler}
            className='text-input'
          />
        </Form.Item>
        <Form.Item required label='Email'>
          <Input
            id='email'
            placeholder='Enter your Email'
            type='email'
            value={email}
            onChange={emailHandler}
            className='text-input'
          />
        </Form.Item>
        <Form.Item required label='Password'>
          <Input
            id='password'
            placeholder='Enter your password'
            type='password'
            value={password}
            onChange={passwordHandler}
            className='text-input'
          />
        </Form.Item>
        <Form.Item required label='Confirm'>
          <Input
            id='confirmPassword'
            placeholder='Enter your confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={confirmPasswordHandler}
            className='text-input'
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            onClick={submitHandler}
            type='primary'
            className='register-form-button'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(RegisterPage);
