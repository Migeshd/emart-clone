'use client';

import Logo from '@/ui/Atoms/Logo';
import { Button, Form, Input } from 'antd';

function ForgotPassword() {
  return (
    <>
      <Logo />
      <h1 className="mb-8 text-center text-3xl tracking-wide">
        Forgot Password ?
      </h1>
      <p className="text-center text-sm font-light">
        Please, provide the email with which you created account.
      </p>
      <div className="mt-16 flex justify-center">
        <Form
          name="basic"
          className="w-1/4  "
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            className=""
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                message: 'Email is required',
                required: true,
              },
            ]}
          >
            <Input placeholder="example@example.com" />
          </Form.Item>
        </Form>
      </div>

      <div className="flex justify-center ">
        <Button className="w-1/4" type="primary">
          Submit
        </Button>
      </div>
    </>
  );
}

export default ForgotPassword;
