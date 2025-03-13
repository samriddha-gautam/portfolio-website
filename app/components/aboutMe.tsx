export default function AboutMe() {
    return (
      <section id="about-me" className="min-h-screen flex flex-col ">
        <div className="mx-12">
        <h1 className="text-5xl pb-8 text-center">Know<strong className="text-customGreen">Me</strong></h1>
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
          I watched a youtube video suggested in my page about developing a website and from then on I decdied 
          on what I had to do.
        </p>
        <p className="text-xl md:text-2xl font-normal">
          These are my other areas of interest:
          <li><span className="text-customGreen font-normal italic">Football</span></li>
          <li><span className="text-customGreen font-normal italic">Travelling</span></li>
          <li><span className="text-customGreen font-normal italic">Mobile Games</span></li>
        </p>
        </div>
      </section>
    );
  }
  