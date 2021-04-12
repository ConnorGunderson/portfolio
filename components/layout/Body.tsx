import _ from 'lodash';

import { Footer } from '.';
import { NavBar } from '.';

export const Body = ({ children }) => {
  return (
    <main className={`h-full relative`}>
      <NavBar />
      <div >
        {children}
      </div>
      <Footer />
    </main>
  );
};
