"use client";
import Image from 'next/image'
import Navbar from './navbar';

export default function Home() {
  return (
    <div>
      {/* <nav className=" text-white px-9 py-3.5 sticky top-0 left-0 right-0  backdrop-blur-lg shadow-lg bg-[#000000]/70">
      </nav> */}
      <Navbar />
      {/* Main Content */}
      <main className="pt-20">
        <div className="flex flex-row items-center justify-between max-w-4xl mx-32 p-3 space-x-6">
          <div className="flex-1">
            <h2 className="text-3xl mb-2">Hey There!👋🏻</h2>
            <p className="text-white md:text-4xl whitespace-nowrap">
            I AM <span className="text-green-600">SAMRIDDHA GAUTAM</span></p>
          </div>
          <div className="w-48 md:w-64 lg:w-80 flex-shrink-0">
            <div className="w-100 h-80 rounded-full border-4 
                          border-gray-300 overflow-hidden flex items-center 
                          justify-center hover:border-customGreen transition-colors duration-400 ease-in-out">
              <Image 
                src="/images/photo-profile.jpg" 
                alt="profile-photo"
                width={500} 
                height={500} 
                className="rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </main>
      <div className='mx-14 my-32'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eligendi maiores omnis illum? Temporibus dolorem veritatis neque magni labore esse libero, sint consectetur ad similique nostrum odio fugiat tempore numquam.<br />
          Amet, cum alias hic ullam aliquid quasi repellat sequi atque similique eligendi eum enim consectetur quae nemo adipisci, necessitatibus aperiam beatae? Natus autem aut, possimus placeat corrupti illo vero quod?<br />
          Asperiores corporis velit corrupti accusamus eaque eveniet provident temporibus aliquid itaque necessitatibus, sed natus nesciunt ad fugiat repellat ipsa cupiditate quia id voluptatem pariatur maiores atque. Sit perspiciatis quam similique!<br />
          Vel sed natus optio voluptates odit mollitia dolorum inventore nostrum repellat ab obcaecati voluptatibus beatae fugit quibusdam, commodi velit delectus laboriosam repudiandae recusandae perferendis aliquam fugiat quidem maxime! Fuga, inventore!<br />
          Corrupti at ad ut quis nobis, eius quisquam voluptatem excepturi, cupiditate sed ea delectus eligendi ipsa ullam dignissimos saepe accusantium aliquid provident nihil. Impedit tempore eveniet, quas id hic laborum!<br />
          Explicabo tempora nisi culpa iste commodi modi magni natus amet asperiores provident tempore repellat debitis accusamus eveniet, voluptatem repudiandae, excepturi laborum earum quas, accusantium recusandae facilis. Possimus ut harum fuga?<br />
          Minima recusandae nostrum dicta labore magni mollitia repellendus impedit esse voluptate non, consequuntur, obcaecati dignissimos aut modi! Maxime expedita nemo ipsum asperiores laudantium totam eveniet accusantium. Illo quas veritatis labore?<br />
          Laborum quibusdam ullam in dolorem ratione mollitia magni. Dicta repellendus iure autem. Expedita dicta perspiciatis, cum, voluptate aliquid fuga maxime itaque similique eligendi velit aspernatur error voluptatibus necessitatibus modi? Nam!<br />
          Tempore expedita voluptates, unde quia doloremque id magnam facilis ipsa ad repudiandae praesentium consequuntur minus dolorem cum! Earum molestias impedit debitis ullam, consectetur in, eos quidem deleniti maiores velit vel?<br />
          Asperiores, magnam aliquid sunt expedita eligendi quisquam, soluta facere quod ipsa eos at voluptas id ab impedit nobis distinctio officia illo fugiat voluptatibus? Obcaecati delectus commodi iste repellendus facilis ducimus.<br />
          Recusandae illo laborum, libero quasi obcaecati fuga suscipit hic blanditiis numquam, quo quibusdam cum ipsam laudantium similique soluta quis. Perspiciatis, ad! Aliquam ex unde nisi nesciunt, expedita debitis ad molestiae?<br />
          Repellendus obcaecati, recusandae facilis quo distinctio necessitatibus, nesciunt dolores odit nobis aspernatur sunt possimus officiis dignissimos quidem modi. Asperiores molestias assumenda dolorum quis possimus eum vero officia non aspernatur maxime.<br />
          Et aperiam asperiores impedit laborum eveniet odio recusandae omnis, optio quia dicta iure quasi. Sit, earum perferendis ea asperiores at, ab distinctio fuga, modi esse cupiditate rerum nesciunt praesentium! Aliquid.<br />
          Quam cupiditate impedit debitis dolorem similique fugiat quis vero nisi eos inventore soluta in, accusantium sequi. Dolor molestias vitae cupiditate, quia ad nemo odio, fugiat rerum reprehenderit, veritatis ab eius.<br />
          Facere quae voluptatem ipsa maxime, velit laudantium pariatur nobis ex, inventore, est rem explicabo similique. In porro vero consectetur excepturi maxime corporis doloremque, nam repudiandae quaerat fugiat ab sint necessitatibus?<br />
        </p>
      </div>

    </div>
  );
}
