import { Body, Header } from '.';
import { SuccessModal } from './SuccessModal';

export const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};
