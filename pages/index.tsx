import { Layout } from '../components/layout'
import { About, Projects, Skills } from '../components/page-sections'

const pageSections = [About, Skills, Projects]

const Home = () => {
  return (
    <Layout>
      {pageSections.map((Child, index: number): JSX.Element => {
        return (
          <section key={'page' + index} className="page-fade">
            <Child key={index + 'pageSection'} />
          </section>
        )
      })}
    </Layout>
  )
}

export default Home
