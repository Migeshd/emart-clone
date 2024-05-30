import { Button } from 'antd';
import Link from 'next/link';

function FooterButtons() {
  return (
    <>
      <div className="mt-3 flex justify-center">
        <Link href="/contactUs" passHref>
          <Button type="link">Contact us</Button>
        </Link>
        <span>|</span>
        <Link href="/privacy-policy" passHref>
          <Button type="link">Privacy Policy</Button>
        </Link>
      </div>
      <div className="flex justify-center ">
        <Link href="/authentication/forgotPassword" passHref>
          <Button type="link">Forgot Password</Button>
        </Link>
      </div>
    </>
  );
}

export default FooterButtons;
