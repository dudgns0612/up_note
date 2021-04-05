import WorkspaceItem from 'components/WorkspaceItem';
import { SiderWrapper, MenuWrapper, WorkspaceHeader, FooterWrapper } from './style';

const Sider = () => {
  return (
    <SiderWrapper>
      <MenuWrapper>
        <WorkspaceHeader>Workspace</WorkspaceHeader>
        <WorkspaceItem />
      </MenuWrapper>
      <FooterWrapper>up_node @ 2021</FooterWrapper>
    </SiderWrapper>
  );
};

export default Sider;
