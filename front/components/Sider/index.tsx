import MenuItem from 'components/MenuItem';
import { SiderWrapper, MenuWrapper, MenuHeader, FooterWrapper } from './style';

const Sider = () => {
  return (
    <SiderWrapper>
      <MenuWrapper>
        <MenuHeader>Workspace</MenuHeader>
        <MenuItem />
      </MenuWrapper>
      <FooterWrapper>up_node @ 2021</FooterWrapper>
    </SiderWrapper>
  );
};

export default Sider;
