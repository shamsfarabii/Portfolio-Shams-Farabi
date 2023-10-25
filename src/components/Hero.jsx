import React from 'react'

export default function Hero() {
    return (
        <div id='Hero'>
            <div className='md:flex md:flex-row-reverse items-center justify-center lg:h-[450px] animate-fade bg-slate-900 text-white'>
                <div className='flex items-center justify-center md:w-1/2 animate-fade-right pt-20'>
                    <img src="https://i.ibb.co/8K0DCVQ/pic.jpg" alt="" className='w-[300px] h-[300px] rounded-full' />
                </div>
                <div className='md:w-1/2 flex flex-col items-center justify-center'>
                    <div className='flex items-center lg:mt-20 mt-5 md:ml-[100px] animate-fade-left justify-center'>
                        <h1 className='text-3xl mr-[20px] ml-[25px]'>Hi, I am Farabi!</h1>
                        <img className='w-16 mb-5' src="https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif" alt="" />
                    </div>
                    <div className='mt-5 ml-10 mr-10 mb-20 md:mr-0 animate-fade-left text-xl text-center'>
                        <p>
                        I&apos;m a <span className='font-bold text-blue-400'>Software Engineer</span> with a passion for <span className='text-yellow-200'>problem-solving</span> and <span className='text-yellow-200'>innovative thinking</span>. My software engineering exposed me to diverse technical challenges, and I&apos;m committed to continuous learning and knowledge sharing. I thrive on crafting innovative solutions and cultivating a collaborative work atmosphere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
