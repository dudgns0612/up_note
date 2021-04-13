import { MenuOutlined } from '@ant-design/icons';
import { WorkspaceHeaderWrapper } from './style';

const WorkspaceHeader = () => {
  return (
    <WorkspaceHeaderWrapper>
      <div>
        <h3>Develop</h3> <span>/</span> <h3>Test</h3>
      </div>
      <MenuOutlined />
    </WorkspaceHeaderWrapper>
  );
};

export default WorkspaceHeader;
