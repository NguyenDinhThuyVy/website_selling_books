'use client';

import Link from 'next/link';
import routes from '@/constant/routes';
import Button from '@/components/Button';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../assets/logo.png';
import InforLogin from '@/components/InforLogin';

export default function Header() {
  const pathname = usePathname();
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const auth = sessionStorage.getItem('auth');
    if (auth) {
      setAuth(JSON.parse(auth));
    }
  }, []);
  return (
    <header className="flex items-center gap-x-3 px-[100px] bg-white">
      <div className="w-[80px] h-[80px]">
        <Link href={routes.HOME}>
          <Image src={logo} alt="" className="object-cover w-full h-full" />
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Link
          href={routes.HOME}
          className={
            pathname === routes.HOME
              ? 'text-[#ce1515c4] font-semibold text-sm'
              : 'text-sm font-semibold'
          }
        >
          Home
        </Link>
        <Link
          href={routes.ALLBOOK}
          className={
            pathname === routes.ALLBOOK
              ? 'text-[#ce1515c4] font-semibold text-sm'
              : 'text-sm font-semibold'
          }
        >
          Books
        </Link>
      </div>
      <div className="flex ml-auto gap-x-3">
        {auth ? (
          <>
            <InforLogin />
          </>
        ) : (
          <>
          <Popover
            className='flex items-center py-1 hover:text-gray-300 cursor-pointer'
            renderPopover={
              <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
                <div className='flex flex-col py-2 pr-28 pl-3'>
                  <button className='py-2 px-3 hover:text-orange'>Tiếng Việt</button>
                  <button className='py-2 px-3 hover:text-orange mt-2'>English</button>
                </div>
              </div>
            }
          >  <svg
              xmlns='http://www.w3.org/2000/svg'
@@ -50,44 +42,29 @@ export default function Header() {
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
            <Button kind="primary" to={routes.LOGIN}>
              Login
            </Button>
            <Button kind="secondary" to={routes.REGISTER} isBorder={true}>
              Regisiter
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
