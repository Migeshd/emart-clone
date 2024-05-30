import getBrandLogo from '@/utils/getBrandLogo';
import Image from 'next/image';

function Logo() {
  return (
    <div className="mt-[39px] flex justify-center ">
      <Image src={`/${getBrandLogo()}`} alt="nipuna" height={200} width={200} />
    </div>
  );
}

export default Logo;
