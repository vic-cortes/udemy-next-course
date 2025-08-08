export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <span className='text-white'>Home</span>

      <div className='flex flex-1'></div>

      <a className='mr-2 text-white' href='/about'>
        About
      </a>
      <a className='mr-2 text-white' href='/pricing'>
        Pricing
      </a>
      <a className='mr-2 text-white' href='/contact'>
        Contact
      </a>
    </nav>
  );
};
