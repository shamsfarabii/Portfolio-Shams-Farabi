import { LinearGradient } from 'react-text-gradients'

export default function Tech() {
  return (
    <div>
      <div className="w-full lg:flex bg-black text-white animate-jump-in">
        <div className="flex flex-col items-center justify-center h-[400px] lg:w-1/2 mx-[30px] mb-[30px]  lg:space-y-10">
          <div className="text-center lg:mb-10">
            <h1 className=' text-3xl text-center'>
              <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                Key Technologies
              </LinearGradient>
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-10 lg:m-[50px] mt-[80px]">
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                alt="ts"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="/next-js.svg"
                alt="nextJS"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="/react.svg"
                alt="react"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="/expo-1.svg"
                alt="expo"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="/fastapi-1.svg"
                alt="fastAPI"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="/postgresql.svg"
                alt="postgres"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="/flutter-logo.svg"
                alt="flutter"
                width="60"
                height="60"
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="/mongo.svg"
                alt="mongo"
                width="80"
                height="80"
              />
            </div>
          </div>

        </div>
        <div className="lg:w-1/2   flex items-center justify-center text-sm">
          <div>
            <img
              src="https://i.ibb.co/wss5H2T/animated-programmer-guy-coding-790a0bs8e8thpisg.gif"
              alt=""
              className="w-[380px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
