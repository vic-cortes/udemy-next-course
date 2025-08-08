import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page Description',
  keywords: ['about', 'nextjs', 'react'],
  authors: [{ name: 'Victor Cortes', url: 'https://github.com/vic-cortes' }],
};

export default function AboutPage() {
  return (
    <>
      <span className='text-7xl'>About Page</span>
    </>
  );
}
