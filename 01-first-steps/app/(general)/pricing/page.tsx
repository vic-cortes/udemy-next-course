import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing Page Description',
  keywords: ['pricing', 'nextjs', 'react'],
  authors: [{ name: 'Victor Cortes', url: 'https://github.com/vic-cortes' }],
};

export default function PricingPage() {
  return (
    <>
      <span className='text-7xl'>Pricing Page</span>
    </>
  );
}
