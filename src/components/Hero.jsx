import { LinearGradient } from 'react-text-gradients'

export default function Hero() {
    return (
        <div id='Hero' className='bg-slate-900'>
            <div className='md:flex md:flex-row-reverse items-center justify-center lg:h-[450px] animate-fade text-white'>
                <div className='flex items-center justify-center md:w-1/2 animate-fade-right pt-20'>
                    <img src="https://previews.dropbox.com/p/thumb/ACZwTy3xi9X9azSw8L0Ee4oYgIb0ppFACrXjfLglezO1gOhy7MoMzQy0jQF6l2j0hgdVQwQqvG9SVcSz8pMfIgMQU_G4KZH8YvPP9_zraBxFhbSo_VTpt2XJaY7i4QNrAERJuynOv7yUi1_8CIdzpIQ1TxmqAFqTDTn9j16o00l-zKzuDdNjpKvwc06tQ56J0D5sV6wVET7BIp6kCGp0JL1YHwaV84gmmrc04x7Y_Mgn-xfvbaTOgG7OA4ZQGKFpDCgFa92COMVvpqEI4YNXK_FkLPA80reCLyzJxEgoIz4Vd1lSPayn9podravaRcKyLiEuXfY7VSgf_HtRglmF7ZTW/p.jpeg?is_prewarmed=true" alt="" className='w-[300px] h-[300px] rounded-full' />
                </div>
                <div className='md:w-1/2 flex flex-col items-center justify-center'>
                    <div className='flex items-center lg:mt-20 mt-5 md:ml-10 md:mt-20 animate-fade-left justify-center'>
                        <h1 className='text-3xl mr-[20px] ml-[25px]'>
                            <LinearGradient
                                gradient={['to left', '#ff68f0 ,#17acff']}
                                fallbackColor="black"
                            >
                                Hi, I am Farabi
                            </LinearGradient>
                        </h1>
                        <img className='w-16 mb-5' src="https://media.tenor.com/SNL9_xhZl9oAAAAi/waving-hand-joypixels.gif" alt="" />
                    </div>
                    <div className='mt-5 ml-10 mr-10 mb-20 md:mr-0 animate-fade-left text-xl leading-loose text-center'>
                        <p>
                            I&apos;m a <span className='font-bold text-blue-400'>Software Engineer</span> with a passion for <span className='text-yellow-200'>problem-solving</span> and <span className='text-yellow-200'>innovative thinking</span>. My software engineering exposed me to diverse technical challenges, and I&apos;m committed to continuous learning and knowledge sharing. I thrive on crafting innovative solutions and cultivating a collaborative work atmosphere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
