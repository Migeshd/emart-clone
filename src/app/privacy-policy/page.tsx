'use client';

import CopyRight from '@/ui/Atoms/CopyRight';

function page() {
  return (
    <>
      <div className="p-3">
        <h1 className="mb-8 mt-3 text-center text-3xl ">
          E-Mart - Terms of Usage and Privacy Policy
        </h1>
        <hr className="mb-4 border-t-2 border-slate-200" />
        <h1 className=" mb-3 mt-3 text-xl font-medium">
          TERMS OF USAGE AND PRIVACY POLICY
        </h1>
        <p className="font-light">
          Welcome to our E-Mart App, developed by NIPUNA Prabidhik Sewa. By
          accessing and using this App, you hereby agree to comply with and be
          bound by the following terms and conditions of use, as well as our
          privacy policy. If you do not agree with any part of these terms and
          conditions, please refrain from using our App. The terms `&quot;E-Mart
          `&quot;we,`&quot;us`&quot; or `&quot;our `&quot; refer to the owner of
          this App, NIPUNA Prabidhik Sewa. The terms `&quot;you`&quot;users
          customers`&quot; or `&quot;viewers`&quot; refer to the individuals who
          access and utilize our services.
        </p>
        <h1 className=" mb-3 mt-3 text-xl font-medium">GENERAL</h1>
        <p className="font-light">
          This App is owned and operated by NIPUNA Prabidhik Sewa. The primary
          purpose of our App is to facilitate the process of order taking for
          small orders. It provides a platform for capturing and managing
          customer orders efficiently. It is important to note that we are not
          responsible for the products or services offered by the businesses
          utilizing our App for order taking. Our role is limited to providing a
          technological solution for order management.
        </p>
        <h1 className=" mb-3 mt-3 text-xl font-medium">PRIVACY POLICY</h1>
        <p className="font-light">
          At the E-Mart App, we are committed to protecting your privacy and
          ensuring the security of your personal information. This privacy
          policy outlines how we collect, use, and safeguard the data you
          provide while using our App.
        </p>
        <h1 className=" mb-3 mt-3 text-xl font-medium">
          Information We Collect:
        </h1>
        <p className="font-light">
          We may collect certain information from you when you use our App,
          including but not limited to:
        </p>
        <ul>
          <li>
            Contact Information: Name, email address, Pan No., phone number, and
            other relevant details.
          </li>
          <li>
            Order Details: Information related to the orders you place through
            the App.
          </li>
          <li>
            Usage Data: Data on how you interact with the App, such as
            navigation paths and timestamps.
          </li>
        </ul>
        <h1 className=" mb-3 mt-3 text-xl font-medium">
          {' '}
          How We Use Your Information:
        </h1>
        <p className="font-light">
          We use the collected information for the following purposes:
        </p>
        <ul>
          <li>
            Order Processing:
            <p className="font-light">
              To facilitate the order-taking process and fulfill customer
              requests.
            </p>
          </li>
          <li>
            Communication: To send order confirmations, updates, and
            notifications.
          </li>
          <li>
            App Improvement:
            <p className="font-light">
              To enhance and optimize the functionality and user experience of
              the App.
            </p>
          </li>
          <li>
            Customer Support:
            <p className="font-light">
              {' '}
              To provide assistance and resolve inquiries.
            </p>
          </li>
        </ul>
        <h1>Data Security:</h1>
        <p className="font-light">
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction.
        </p>
        <h1 className=" mb-3 mt-3 text-xl font-medium">
          Disclosure of Information:
        </h1>
        <p className="font-light">
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share certain information with our business
          partners and service providers for the purpose of providing our
          services.
        </p>
        <h1 className=" mb-3 mt-3 text-xl font-medium">
          Changes to the Privacy Policy:
        </h1>
        <p className="font-light">
          We reserve the right to modify or update this privacy policy at any
          time. Any changes will be effective upon posting on the App.
        </p>
        <p className="font-light">
          By using the E-Mart App, you acknowledge that you have read,
          understood, and agreed to the terms of this privacy policy. If you
          have any questions or concerns about your privacy or the use of your
          information, please contact us at info@nipunasewa.com.
        </p>
        <p>Thank you for using E-Mart!</p>
      </div>
      <CopyRight />
    </>
  );
}

export default page;
