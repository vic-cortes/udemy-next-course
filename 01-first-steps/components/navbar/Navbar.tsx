import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'/'} className='flex items-center mr-2 text-white'>
        <HomeIcon className='mr-2' />
        <span className='text-white'>Home</span>
      </Link>

      <div className='flex flex-1'></div>

      {navItems.map((item) => (
        <Link key={item.path} className='mr-2 text-white' href={item.path}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
};
