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
                  src="https://previews.dropbox.com/p/thumb/ACaxQMyxEdMAsTCTWWBWhSivw5Ta71RPjT7WG29G_iyCefXH_8LXCRQQQwH9fExH_hjFruYimmAmeikPFI-_kVGh5b5tSPZUCBa-1qA_NQwKEaLoNecwAm4fpXfRXBJ31vPnJvMIrrdpQegMjw_Yss__M7D0U7TnbGG0jD_HOQ1s3LUqI03GB9BTcjzHnVQ5CVyH4nroGi5hXggvvy8dSw3jdBQaUZgUrhMKUIfFjqt06MciQCUurLP53w8ip8d858pWqQBL3CXa6alLKL2tfkC0dlsR-AmBjQSnq08eOC0iRm-W--NPmFOGUBNFze3vAwU/p.png"
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
                  src="https://previews.dropbox.com/p/thumb/ACYwf93DSJCCiDFDQil15SPR8RzphFlGztng6Idsq3x9PEaE_A3XuFEFU5vSfggDQbXno7pEB2ktjbdbMZzl28pFxZE2i2f71MTws4YNAXoRzmj-_Q_NdO0aP0qbxI68TnQhm-uAZNxVNg4Umx3BL9ELvQDeMwI5tIouvOPDwJahHHoSZUnNJ5eTNwgHfa4oH6P937EQLJARM3Lm2nV9e1TJS0tUXjAY8C30Hf-wJaKTHtDO6IA6vLZ1cxTuzEvx5iWbeJmcTD61SupsGvcsVM_etkqi4NAmF1Y2Xv09DtJK88tHArPp_4mO22xmuhCmx6s/p.png"
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
