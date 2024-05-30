import CopyRight from '@/ui/Atoms/CopyRight';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

function ContactUsForm() {
  return (
    <>
      <h1 className="text-lighter mt-20 text-center text-2xl">CONTACT US</h1>
      <div className="mt-10 flex justify-center">
        <Form
          name="basic"
          className="w-1/2"
          autoComplete="off"
          layout="vertical"
        >
          <div className="grid grid-cols-2 gap-4 ">
            <Form.Item
              name={['user', 'name']}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="enter your name " />
            </Form.Item>

            <Form.Item
              name={['userLastName', 'lastName']}
              label="LastName"
              rules={[{ required: true }]}
            >
              <Input placeholder="enter your last name " />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              label="Mobile Number"
              name="number"
              rules={[
                {
                  pattern: /^\d{10}$/,
                  message: 'The input is not a valid mobile number!',
                },
                { required: true, message: 'Number is required' },
              ]}
            >
              <Input placeholder="enter your mobile number " />
            </Form.Item>
          </div>

          <TextArea
            showCount
            maxLength={200}
            // onChange={onChange}
            placeholder="Enter Message"
            style={{ height: 120, resize: 'none' }}
          />
          <Button type="primary" className="mt-3">
            Submit
          </Button>
          <CopyRight />
        </Form>
      </div>
    </>
  );
}

export default ContactUsForm;
