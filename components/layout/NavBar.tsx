import React, { useRef } from 'react'

const navLinks = ['About', 'Skills', 'Projects']

export const NavBar = () => {
  const ref = useRef<Element | null>(null)

  const handleClick = (e: React.MouseEvent) => {
    if (ref.current) ref.current.classList.remove('text-purple-700')
    if (e.target instanceof Element) {
      ref.current = e.target
      ref.current.classList.add('text-purple-700')
    }
  }

  return (
    <nav
      className="sticky w-full z-10 bg-white navbar shadow-lg p-4"
      style={{ top: -1 }}
    >
      {navLinks.map((l, index) => {
        return (
          <a
            href={'#' + l.toLowerCase()}
            onClick={(e: React.MouseEvent) => handleClick(e)}
            key={index}
          >
            {l}
          </a>
        )
      })}
    </nav>
  )
}
