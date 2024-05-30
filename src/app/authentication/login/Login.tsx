'use client';

import FooterButtons from '@/ui/Atoms/LoginPageButtons';
import Logo from '@/ui/Atoms/Logo';
import { Button } from 'antd';
import React from 'react';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div>
      <Logo />
      <h1 className="mb-10 text-center text-xl tracking-wide">
        Please, login to Admin Panel
      </h1>
      <LoginForm />
      <div className="flex justify-center ">
        <Button className="w-1/4" type="primary">
          Login
        </Button>
      </div>
      <FooterButtons />
    </div>
  );
}

export default Login;
