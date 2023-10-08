import  { useState } from 'react';
import ActiveLink from '../utils/ActiveLink';



const Navbar = () => {
  const [showNavLinks, setShowNavLinks] =useState(false);
  // console.log(showNavLinks)
  const navData = (
    <>
      <li onClick={()=>setShowNavLinks(!showNavLinks)}>
        <ActiveLink  to='/'>
          Services
        </ActiveLink>
      </li>

      <li onClick={()=>setShowNavLinks(!showNavLinks)}>
        <ActiveLink  to='/'>
          Managed Security Servicess
        </ActiveLink>
      </li>
      <li onClick={()=>setShowNavLinks(!showNavLinks)}>
        <ActiveLink  to='/'>
          Initiatives
        </ActiveLink>
      </li>
      <li onClick={()=>setShowNavLinks(!showNavLinks)}>
        <ActiveLink  to='/'>
          {' '}
          Tech for Hire
        </ActiveLink>
      </li>
      <li onClick={()=>setShowNavLinks(!showNavLinks)}>
        <ActiveLink  to='/'>
          About Us
        </ActiveLink>
      </li>
      <li onClick={()=>setShowNavLinks(!showNavLinks)}>
        <ActiveLink  to='/'>
          Blog
        </ActiveLink>
      </li>
      <li onClick={()=>setShowNavLinks(!showNavLinks)}>
        <ActiveLink  to='/contact'>
          <span
            className='bg-gray-400 text-blue-900 hover:bg-white px-2 md:px-4 lg:px-5 py-1 md:py-2 lg:py-3 uppercase border-2 border-sky-600 '
            style={ { width: '200px' } } // Set a fixed width
          >
            Contact Us
          </span>

        </ActiveLink>
      </li>
    </>
  );
  return (
    <div className='bg-black z-10 w-full fixed py-4 top-0 transition-colors duration-300 ease-in bg-transparent  backdrop-blur'>
      <div className='flex justify-between items-center text-font'>
      <div className='lg:hidden'>
          <label tabIndex={0} className=' lg:hidden '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-10 w-10  p-2 bg-yellow-500 hover:bg-yellow-600 rounded-full '
              onClick={()=>setShowNavLinks(!showNavLinks)}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`flex flex-col gap-2 bg-orange-400 mt-3 z-1 lg:hidden shadow bg-base-100 rounded-md w-52 ${showNavLinks ? 'px-2 py-3' : 'p-0'}`}

          >
            {showNavLinks && navData}
          </ul>
        </div>
        <div className=''>
          <a href='/' className=' text-2xl pl-6 font-bold text-red-500'>Prime<span className='font-thin'>Fort</span> </a>
        </div>
        <div className=' hidden lg:flex'>
          <ul className='flex flex-col lg:flex-row gap-8 px-1'>{navData}</ul>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
