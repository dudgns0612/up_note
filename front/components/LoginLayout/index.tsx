import { ReactElement } from 'react';
import { LayoutWrapper } from './style';

interface Props {
  children: ReactElement;
}

const LoginLayout = ({ children }: Props) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default LoginLayout;
