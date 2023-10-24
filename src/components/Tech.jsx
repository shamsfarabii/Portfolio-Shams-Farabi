import React from "react";

export default function Tech() {
  return (
    <div>
      <div className="w-full lg:flex bg-black text-white pt-[5px] animate-jump-in">
        <div className="flex flex-col items-center justify-center h-[400px] lg:w-1/2 m-[30px]  lg:space-y-10">
          <div className="text-center pt-[20px]">
            <h1 className="mt-[-60px] text-3xl text-white">Key Technologies</h1>
          </div>
          <div className="grid grid-cols-4 gap-10 lg:m-[50px] mt-[80px]">
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="40"
                height="40"
              />
              <p>Git</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />
              <p>Javascript</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="40"
                height="40"
              />
              <p>MongoDB</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />
              <p>Node Js</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width="40"
                height="40"
              />
              <p>Python</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />
              <p>React Js</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
                width="40"
                height="40"
              />
              <p>
                Nest Js
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm">
              <img
                src="https://i.ibb.co/xSMLKZq/nextjs-icon-svgrepo-com.png"
                width="40"
                height="40"
              />
              <p>Next Js</p>
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
