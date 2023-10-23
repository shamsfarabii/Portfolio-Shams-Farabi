import React from 'react'

export default function Hero() {
    return (
        <div>
            <div className='md:flex md:flex-row-reverse items-center justify-center lg:h-[450px] animate-fade bg-slate-900 text-white'>
                <div className='flex items-center justify-center md:w-1/2 animate-fade-right pt-[30px]'>
                    <img src="https://i.ibb.co/8K0DCVQ/pic.jpg" alt="" className='w-[300px] h-[300px] rounded-full' />
                </div>
                <div className='md:w-1/2 flex flex-col items-center justify-center'>
                    <div className='flex items-center mt-[50px] md:ml-[100px] animate-fade-left justify-center'>
                        <h1 className='text-3xl mr-[20px] ml-[25px]'>Hi, I am Farabi</h1>
                        <img src="https://img.icons8.com/emoji/48/waving-hand-emoji.png" alt="" />
                    </div>
                    <div className='mt-[20px] ml-[80px] mr-[80px] mb-[40px] md:mr-[0px] animate-fade-left text-center'>
                        <p>
                        I&apos;m a computer engineer with a passion for problem-solving. My software engineering exposed me to diverse technical challenges, and I&apos;m committed to continuous learning and knowledge sharing. I thrive on crafting innovative solutions and cultivating a collaborative work atmosphere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
