import { GiSpartanHelmet } from 'react-icons/gi'
import { SiGithub } from 'react-icons/si'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { ComponentWithChildren } from '../../types'

export const About = () => {
  return (
    <div
      className={`flex flex-col md:h-about justify-center items-center md:flex-row`}
      id="about"
    >
      <section className="md:w-2/6 py-8 flex flex-col justify-center items-center">
        <header>
          <h2 className="text-2xl lg:text-3xl">
            <span className="text-purple-700">Education</span> and Interests
          </h2>
        </header>
        <article className="text-center pt-8 flex flex-col items-center">
          <p className="text-green-800">
            Michigan State University{' '}
            <GiSpartanHelmet className="inline" size="2em" />
          </p>
          <b>Bachelors in Media and Information</b>
          <b>24 Years Old</b>
          <div className="flex items-center">
            <a
              href="https://github.com/ConnorGunderson"
              className="mt-4"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub size="3em" />
            </a>
            <a
              href="/Connor_Gunderson_Software_Engineer.pdf"
              className="mt-4 font-bold ml-4 text-4xl text-center"
              target="_blank"
            >
              CV
            </a>
          </div>
        </article>
      </section>
      <section className="flex-1 flex flex-col mx-auto p-5">
        <header>
          <h2 className="mx-auto text-center text-4xl p-2 border-b-2 w-52  border-purple-400">
            About <IoPersonCircleOutline className="inline" />
          </h2>
        </header>
        <article className="pt-8">
          <p>
            <NewLine>Hello! </NewLine> I am a Software Engineer III at Generac -
            Tank Utility. I am always open to new and exciting opportunities.
            Please feel free to email me at gundydev@gmail.com for any inquires.
          </p>
          <p className="pt-8">
            <NewLine>My </NewLine>main focus and goal for my future as a
            developer is to find ways to use technology to improve people's
            lives.
          </p>
          <p className="pt-8">
            <NewLine>Aside</NewLine> from programming, I love to play video
            games, workout, and read books. My favorite games to play are real
            time strategy games (RTS's) like Factorio, Oxygen Not Included, and
            Rimworld. My favorite books include; Journey to the West by Wu
            Cheng'en, Republic by Plato, Clean Code by Robert C. Martin, and
            Meditations by Marcus Aurelius.{' '}
            <b>I do not use any social media.</b>
          </p>
        </article>
      </section>
    </div>
  )
}

const NewLine = ({ children }: ComponentWithChildren) => {
  return <span className="text-purple-700">{children}</span>
}
