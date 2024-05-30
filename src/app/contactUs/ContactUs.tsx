import Logo from '@/ui/Atoms/Logo';
import MapUsed from '@/ui/Atoms/Map';
import ContactUsForm from './ContactUsForm';

function ContactUs() {
  return (
    <>
      <Logo />
      <h1 className="mb-5 text-center text-3xl tracking-wide">
        Introducing our E-Mart
      </h1>
      <div className="m-auto mt-5 flex w-[1000px] justify-center text-center">
        <p className="font-light">
          The ultimate solution for streamlining your order management process.
          Simplify your business operations with a user-friendly interface
          designed exclusively for swiftly capturing and processing small
          orders. Say goodbye to complexity and welcome efficiency as you
          effortlessly record customer requests, track inventory, and manage
          transactions, all in one place. Elevate your customer service and
          enhance your productivity with our focused, single-feature app, making
          small order taking a breeze. Experience the future of seamless order
          management – download the E-Mart today.
        </p>
      </div>
      <MapUsed />
      <ContactUsForm />
    </>
  );
}

export default ContactUs;
