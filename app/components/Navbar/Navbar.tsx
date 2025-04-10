"use client";

import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Courses', href: '/courses' },
  { name: 'Books', href: '/books' },
  { name: 'Public Speaking', href: '/speaking' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-black'}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 justify-between items-center">
                
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                  <img src="/assets/logo/logo_white.png" alt="Logo" className="h-10 w-auto" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-10 text-lg font-semibold text-white">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span
                        className={`group relative transition duration-300 cursor-pointer ${
                          pathname === item.href ? 'text-blue-400' : 'hover:text-blue-400'
                        }`}
                      >
                        {item.name}
                        {['Courses', 'Content', 'Books'].includes(item.name) && (
                          <ChevronDownIcon className="inline-block ml-1 h-4 w-4" />
                        )}
                        <span
                          className={`absolute left-0 -bottom-1 h-0.5 bg-blue-400 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                            pathname === item.href ? 'scale-x-100' : ''
                          }`}
                        />
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white hover:text-blue-400 focus:outline-none">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Panel */}
            <Disclosure.Panel className="lg:hidden bg-black text-white px-4 pt-4 pb-6 space-y-3 text-base">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`block px-3 py-2 rounded-md ${
                      pathname === item.href ? 'text-blue-400' : 'hover:text-blue-400'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
