import { WorkspaceItemWrapper, WorkspaceParentLi } from './style';

const WorkspaceItem = () => {
  return (
    <WorkspaceItemWrapper>
      <ul>
        <WorkspaceParentLi>
          <span>Develop (33)</span>
          <ul>
            <li> - menu (12) </li>
            <li> - menu (11) </li>
            <li> - menu (10) </li>
          </ul>
        </WorkspaceParentLi>
        <WorkspaceParentLi>
          <span>Enviroment</span>
          <ul>
            <li> - menu</li>
            <li> - menu</li>
            <li> - menu</li>
          </ul>
        </WorkspaceParentLi>
      </ul>
    </WorkspaceItemWrapper>
  );
};

export default WorkspaceItem;
