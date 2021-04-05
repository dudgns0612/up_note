import { ReactElement, useState, useCallback } from 'react';
import Sider from 'components/Sider';
import {
  LayoutWrapper,
  HeaderWrapper,
  SideMenuWapper,
  ContentWrapper,
  MenuButton,
  CloseButton,
} from './style';

interface Props {
  children: ReactElement;
}

const MainLayout = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onChangeMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <div>
          <MenuButton onClick={onChangeMenu} />
        </div>
        <div>(워크스페이스 이름)</div>
        <div>(프로필 사진)</div>
      </HeaderWrapper>
      <SideMenuWapper isOpen={isMenuOpen}>
        <CloseButton onClick={onChangeMenu}>x</CloseButton>
        <Sider />
      </SideMenuWapper>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

export default MainLayout;
