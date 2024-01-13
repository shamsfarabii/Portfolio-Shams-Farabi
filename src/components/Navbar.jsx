import { useEffect, useState } from 'react';

export default function Navbar() {
  const [check, setCheck] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setCheck(!check);
  };

  useEffect(() => {
    // setCheck(false);
  }),[];

  return (
    <div>
      <div className='flex h-16 bg-slate-900 border-b border-slate-500 border-opacity-50 justify-between p-4 items-center'>
        <div className='flex items-center'>
          <h1 className='text-xl text-white animate-fade-up'>{"< Shams Farabi />"}</h1>
        </div>
        <div className='hidden md:flex text-white items-center space-x-7 animate-fade-left font-bold'>
          <a href='#Hero'>About</a>
          <a href='#work'>Experience</a>
          <a href='#testimonials'>Achievements</a>
          <a href='#contact'>Contact</a>
        </div>
        <a href='https://drive.google.com/file/d/1a1bgaOkRM-Cfz51G1Nlb5L1NbprTBpCs/view' target="_blank" className='hidden md:flex items-center animate-fade-right' rel="noreferrer">
          <button className='bg-white p-2 font-bold rounded-md'>Download CV</button>
        </a>
        <div className='space-y-1 md:hidden' onClick={toggleMenu}>
          <div className='rounded-full w-7 h-1 bg-white'></div>
          <div className='rounded-full w-7 h-1 bg-white'></div>
          <div className='rounded-full w-7 h-1 bg-white'></div>
        </div>
      </div>

      {check && (
        <div className='flex flex-col items-center h-60 bg-black p-4 text-center text-white animate-fade-down font-bold space-y-4'>
          <a href='#about'>About</a>
          <a href='#work'>Experience</a>
          <a href='#testimonials'>Achievements</a>
          <a href='#contact'>Contact</a>
          <a href='https://drive.google.com/file/d/1a1bgaOkRM-Cfz51G1Nlb5L1NbprTBpCs/view' className='bg-white text-black w-[120px] rounded-lg'>Download CV</a>
        </div>
      )}
    </div>
  );
}
