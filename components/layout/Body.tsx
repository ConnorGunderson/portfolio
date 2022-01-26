import { ComponentWithChildren } from '../../types'
import { Footer, NavBar } from '.'

export const Body = ({ children }: ComponentWithChildren) => {
  return (
    <main className={`h-full relative`}>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </main>
  )
}
