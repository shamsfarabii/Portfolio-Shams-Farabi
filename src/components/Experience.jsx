import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Experience() {
  return (
    <div className="text-white flex items-center justify-center bg-slate-800">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
        swipeable={true}
        showIndicators={false}
      >
        <div className="flex w-full h-[400px]">
          <div className="flex flex-col items-center justify-center">
            <div className="w-1/3">
              <img
                src="https://i.ibb.co/QXVDpN8/lllogo-removebg-preview.png"
                alt=""
              />
            </div>
            <div>
              <p className="text-2xl">Liberate Labs</p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-start pr-[30px] text-left">
            <p className="text-3xl mb-[40px]">Software Engineer Intern</p>
            <ul className="list-disc space-y-5">
            <li>
              Collaborated with cross-functional teams to develop software solutions using cutting-edge technologies, such as Next.js, Nest.js, and multiple third-party libraries.
            </li>
            <li>
              Demonstrated strong problem-solving skills to address complex
              technical challenges efficiently.
            </li>
            <li>
              Actively engaged in team meetings and brainstorming sessions,
              contributing innovative ideas and solutions to improve project
              outcomes.
            </li>
            <li>
              Successfully completed assigned tasks within established
              timelines, exceeding expectations, and delivering high-quality
              deliverables.
            </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full h-[400px]">
          <div className="flex flex-col items-center justify-center">
            <div className="w-1/3">
              <img
                src="https://i.ibb.co/CKsWrBx/iiuccpslogo.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="text-xl mt-[30px]">IIUC Competitive Programming Society</p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-start pr-[30px] text-left mr-10">
            <p className="text-3xl mb-[40px]">Boot-camp Coordinator, Trainer, and Mentor</p>
            <ul className="list-disc space-y-5">
            <li>
            Delivered lectures on various topics, such as Data Types, Loops and Conditions, STL, and Binary Search etc.
            </li>
            <li>
            Monitored participant&apos;s progress and provided guidance tailored to their needs.
            </li>
            <li>
            Coordinated class schedules with trainers and sent reminders to students about upcoming sessions.
            </li>
            </ul>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
