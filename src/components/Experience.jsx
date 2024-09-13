import { LinearGradient } from 'react-text-gradients';

export default function Experience() {
  return (
    <div id='work'>
      <div className="w-full flex flex-col lg:flex-row bg-black text-white animate-jump-in">
        <div className="flex flex-col items-center justify-center lg:h-[400px] w-full">
          <div className="text-center">
            <h1 className="text-3xl mb-6">
              <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                Experiences
              </LinearGradient>
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-16 bg-slate-900 py-16 mb-12">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-center items-center w-full">
              <div className="flex flex-col justify-center w-2/3 lg:w-1/3 items-center">
                <img
                  src="/brownbrick.svg"
                  alt="BrownBrick"
                  width="300"
                  height="300"
                />
              </div>
              <div className="hidden lg:block border-l-[6px] border-white h-full w-[2px]"></div>
              <div className="flex flex-col items-center gap-2 text-sm lg:text-lg w-full lg:w-1/3 text-center">
                <h1 className="text-xl lg:text-3xl">Software Engineer</h1>
                <h1 className="text-base lg:text-lg">Full Stack</h1>
                <h1 className="text-base lg:text-md">March &apos;24 - Present</h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 justify-center items-center w-full">
              <div className="flex flex-col items-center justify-center w-2/3 lg:w-1/3">
                <img
                  src="/liberate-labs.svg"
                  alt="Liberate Labs"
                  width="300"
                  height="300"
                />
              </div>
              <div className="hidden lg:block border-l-[6px] border-white h-full w-[2px]"></div>
              <div className="flex flex-col items-center gap-2 text-sm lg:text-lg w-full lg:w-1/3 text-center">
                <h1 className="text-xl lg:text-3xl">Software Engineer Intern</h1>
                <h1 className="text-base lg:text-lg">Full Stack</h1>
                <h1 className="text-base lg:text-md">July &apos;23 - March &apos;24</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
