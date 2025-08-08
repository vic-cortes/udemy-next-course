import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact Page Description',
  keywords: ['contact', 'nextjs', 'react'],
  authors: [{ name: 'Victor Cortes', url: 'https://github.com/vic-cortes' }],
};

export default function ContactPage() {
  return (
    <>
      <span className='text-7xl'>Contact Page</span>
    </>
  );
}
