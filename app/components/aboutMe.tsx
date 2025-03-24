import { GiSoccerBall , GiCampingTent , GiGamepad  } from "react-icons/gi";
import TechStackCards from "./techstack";

export default function AboutMe() {
    return (
      <section id="about-me" className="min-h-screen flex flex-col pb-32">
        <div className="mx-6">
        <h1 className="text-4xl md:text-6xl py-8 text-center font-bold">Know<strong className="text-customGreen">Me</strong></h1>
        <p className="text-xl md:text-2xl font-normal"> 
          Hello everyone, my name is <span className="text-customGreen font-normal">Samriddha</span>. 
          I am from <span className="text-customGreen font-normal">Kathmandu</span>,
          <span className="text-customGreen font-normal">Nepal</span>.
        </p><br />
        <p className="text-xl md:text-2xl font-normal">
          I am proficient in <span className="text-customGreen font-normal italic">C/C++</span> and
          <span className="text-customGreen font-normal italic"> Javascript</span>.
          I also like to use <span className="text-customGreen font-normal italic">Python </span>when the project calls for it.
        </p><br />
        <p className="text-xl md:text-2xl font-normal">
          My interest in programming and coding caught traction when I was in my
          <span className="text-customGreen font-normal italic"> 9<sup>th</sup> grade</span>.
          I watched videos suggested in my youtube page about developing a website and from then on I decdied 
          on what I had to do.
        </p>
        <br />
        <br />
        <p className="flex-col text-xl md:text-2xl font-normal">
          These are my other areas of interest: <br /><br />
          <span className="flex gap-2 items-center text-customGreen font-normal italic">
            <span className="dark:text-white"><GiSoccerBall size={36}/></span>
            Football
          </span><br />
          <span className="flex gap-2  items-center text-customGreen font-normal italic">
            <span className="dark:text-white"><GiCampingTent size={36}/></span>
            Travelling  
          </span><br />
          <span className="flex gap-2  items-center text-customGreen font-normal italic">
            <span className="dark:text-white"><GiGamepad size={36}/></span>
            Mobile Games  
          </span><br />
        </p>
        </div>
        <TechStackCards/>
      </section>
    );
  }
  