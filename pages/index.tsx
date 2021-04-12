import { Layout } from '@/components/layout';
import { About, Contact, Projects, Skills } from '@/components/page-sections';
import { useEffect, useState } from 'react';
import {useInView} from 'react-intersection-observer'

const pageSections = [About, Skills, Projects, Contact];

const Home = () => {
  return (
    <Layout>
      {pageSections.map(
        (Child, index: number): JSX.Element => {
          return (
            <section className="page-fade">
              <Child key={index + 'pageSection'} />
            </section>
          )
        }
      )}
    </Layout>
  );
};

export default Home;
