import Image from 'next/image'
import { FaNodeJs } from 'react-icons/fa'
import { SiCsharp, SiTypescript } from 'react-icons/si'

const circles = () => {
  let circleArr = []
  for (let i = 0; i < 100; i++) {
    circleArr.push(
      <div key={i + 'circleKey'} className="circle-container">
        <div className="circle" />
      </div>
    )
  }
  return circleArr
}

export const Header = () => {
  return (
    <header
      className="relative h-1/2 overflow-hidden"
      style={{ height: '50vh' }}
    >
      <div className="bg-main-header h-full w-screen overflow-hidden relative">
        <div className="text-center h-full flex flex-col justify-center items-center children:my-1">
          <h1 className="text-3xl md:text-5xl font-medium text-white">
            <span className="text-purple-700">Connor</span> Gunderson
          </h1>
          <p className="text-white">Software Engineer</p>
          <Image
            src="/avatar.jpeg"
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="flex justify-around w-28">
            <FaNodeJs size="2em" className="inline text-node" />
            <SiCsharp size="2em" className="inline text-blue-300" />
            <SiTypescript size="2em" className="inline text-blue-800" />
          </div>
        </div>
        {circles()}
      </div>
    </header>
  )
}
