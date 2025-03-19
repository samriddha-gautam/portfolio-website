const cards = [
  {
    title: "ChatBot",
    description: "A simple chatbot that uses natural language processing.",
    image: "chatbot.jpg",
    siteLink: "#",
    codeLink: "#",
  },
  {
    title: "Weather App",
    description: "A real-time weather app fetching live weather data.",
    image: "weather.jpg",
    siteLink: "#",
    codeLink: "#",
  },
  {
    title: "To-Do List",
    description: "A simple and effective task management tool.",
    image: "todo.jpg",
    siteLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio",
    description: "A personal portfolio showcasing projects and skills.",
    image: "portfolio.jpg",
    siteLink: "#",
    codeLink: "#",
  },
  {
    title: "E-Commerce",
    description: "An online store built with modern web technologies.",
    image: "ecommerce.jpg",
    siteLink: "#",
    codeLink: "#",
  },
  {
    title: "Blog App",
    description: "A blogging platform for sharing articles and thoughts.",
    image: "blog.jpg",
    siteLink: "#",
    codeLink: "#",
  },
];


export default function Projects() {
    return (
      <section id="projects" className="min-h-screen flex flex-col items-center">
        <h1 className="text-5xl">My<strong className="text-customGreen">Works</strong></h1>
        <p className="text-3sm"> 
          These are my my most recent projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border-2 rounded-lg bg-black/20 backdrop-blur-[2px] 
                     border-customGreen p-4  md:hover:scale-[103%] transition 
                     duration-300 ease-in-out cursor-default"
          style={{boxShadow: "0px 2px 6px rgba(23, 119, 14, 0.5)"}}
        >
          <h1 className="text-center text-2xl md:text-4xl lg:text-5xl my-4 font-bold ">
            {card.title}
          </h1>
          <img src={card.image} alt={card.title} className="w-full mt-4 h-40 object-cover rounded-md" />
          <p className="text-center">{card.description}</p>
          <div className="flex justify-center m-4 gap-2">
            <a href={card.siteLink} className="flex items-center justify-center gap-2 p-4
                   text-sm md:text-lg bg-customGreen text-white rounded-lg hover:bg-green-800
                  shadow-md hover:shadow-[0_0_15px_1px_rgba(72,255,72,0.8)] transition ease-in-out">
              View Site
            </a>
            <a href={card.codeLink} className="flex items-center justify-center gap-2 p-4
            bg-white dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-300 
            text-sm md:text-lg rounded-lg text-customGreen shadow-xl 
            hover:shadow-[0_0_15px_1px_rgba(72,255,72,0.8)] transition ease-in-out">
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>

        
      </section>
    );
  }
  