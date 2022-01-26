import Image from 'next/image'
import { IoRocketSharp } from 'react-icons/io5'

export const Projects = () => {
  return (
    <section
      id="projects"
      className={`flex flex-col w-full bg-white `}
      style={{ minHeight: '500px' }}
    >
      <header className="flex flex-col justify-center items-center">
        <h2 className="mx-auto text-center text-4xl p-2 border-b-2  border-purple-400">
          Projects <IoRocketSharp className="inline" />
        </h2>
      </header>
      <nav className="projectNav children:shadow-lg flex flex-col lg:flex-row items-center justify-around children:border children:border-gray-100 children:mt-6 py-12">
        <a
          href="https://caroosel.vercel.app/"
          style={{ height: 300, width: 300 }}
          className="relative"
          target="_blank"
          rel="noreferrer"
        >
          <figure style={{ height: 250, width: 300 }} className="relative">
            <Image
              src="/caroosel.png"
              alt="caroosel"
              layout="fill"
              objectFit="cover"
              priority
            />
          </figure>
          <figcaption className="inline-block py-2 justify-center items-center text-xl">
            Caroosel
          </figcaption>
        </a>

        <a
          href="https://muskegon-defenders.vercel.app"
          style={{ height: 300, width: 300 }}
          className="relative"
          target="_blank"
          rel="noreferrer"
        >
          <figure style={{ height: 250, width: 300 }} className="relative">
            <Image
              src="/muskegon-defenders.png"
              alt="muskegon-defenders"
              layout="fill"
              objectFit="cover"
              priority
            />
          </figure>
          <figcaption className="inline-block py-2 justify-center items-center text-xl">
            MPD
          </figcaption>
        </a>
      </nav>
    </section>
  )
}
