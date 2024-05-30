import { Form, Input } from 'antd';

function LoginForm() {
  return (
    <div className="flex justify-center">
      <Form name="basic" className="w-1/4" autoComplete="off" layout="vertical">
        <Form.Item
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

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Password is required',
            },
          ]}
          hasFeedback
        >
          <Input placeholder="password" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
