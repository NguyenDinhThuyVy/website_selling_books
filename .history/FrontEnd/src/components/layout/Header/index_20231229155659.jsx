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
import Popover from '@/components/Popover';

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
      <div className="flex ml-auto gap-x-3 z-20">
        {auth ? (
          <>
            <Popover
              className="flex items-center py-1 hover:text-gray-300 cursor-pointer  bg-red-500  text-white font-medium px-2 rounded-lg"
              renderPopover={
                <div className="bg-gray-100 relative shadow-md rounded-sm border border-gray-200 z-20 w-full">
                  <div className="flex flex-col py-2 pr-28 pl-3 w-full">
                    <button className="py-2 px-3 hover:text-red-800 ">
                      Tiếng Việt
                    </button>
                    <button className="py-2 px-3 hover:text-red-800 mt-2">
                      English
                    </button>
                  </div>
                </div>
              }
            >
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span className="mx-1">Tiếng Việt</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Popover>
            <InforLogin />
          </>
        ) : (
          <>
            <Popover
              className="flex items-center py-1 hover:text-gray-300 cursor-pointer bg-red-500 text-white font-medium px-2 rounded-lg"
              renderPopover={
                <div className="bg-red-300 relative shadow-md rounded-sm border border-gray-200 z-40">
                  <div className="flex flex-col py-2 pr-28 pl-3">
                    <button className="py-2 px-3 hover:text-orange">
                      Tiếng Việt
                    </button>
                    <button className="py-2 px-3 hover:text-orange mt-2">
                      English
                    </button>
                  </div>
                </div>
              }
            >
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span className="mx-1">Tiếng Việt</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Popover>

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
