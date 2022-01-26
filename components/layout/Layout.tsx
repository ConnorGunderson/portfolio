import { Body, Header } from '.'
import { ComponentWithChildren } from '../../types'

export const Layout = ({ children }: ComponentWithChildren) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  )
}
