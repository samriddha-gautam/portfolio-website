export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center gap-6 ">
      <h1 className="text-5xl">
        Contact<strong className="text-customGreen">Me</strong>
      </h1>
        <form
         action="" 
         method="post"
         className="flex flex-col gap-4 bg-black/70 
                    p-6 backdrop:blur-6 rounded-lg shadow-md
                    shadow-black/40
                    "
        >
          <div className="flex items-center p-4 rounded-lg flex-col md:flex-row  gap-2 bg-customGreen/50 backdrop:blur-2">
            <label htmlFor="name" 
            className="md:w-24 font-semibold text-xl">Name:</label>
            <input className="p-3 rounded-2xl text-customGreen focus:outline-none font-semibold " 
            type="text" placeholder="Your Name"/>
          </div>
          <div className="flex items-center p-4 rounded-lg flex-col md:flex-row  gap-2 bg-customGreen/50 backdrop:blur-2">
            <label htmlFor="name" 
            className="md:w-24 font-semibold text-xl">Email:</label>
            <input className="p-3 rounded-2xl text-customGreen focus:outline-none font-semibold " 
            type="text" placeholder="Your Name"/>
          </div>
          <div className="flex items-center p-4 rounded-lg flex-col md:flex-row  gap-2 bg-customGreen/50 backdrop:blur-2">
            <label htmlFor="name" 
            className="md:w-24 font-semibold text-xl">Message:</label>
            <textarea
                id="message"
                rows={4}
                className="rounded-3xl w-full p-3 text-customGreen focus:outline-none font-semibold resize-none "
                placeholder="Any Message?"
              ></textarea>
          </div>
        </form>

    </section>
  );
}
