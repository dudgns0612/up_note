import ItemCard from 'components/ItemCard';
import { WorkspaceListWrapper } from './style';

const WorkspaceList = () => {
  return (
    <WorkspaceListWrapper>
      {new Array(5).fill(1).map(() => (
        <ItemCard />
      ))}
    </WorkspaceListWrapper>
  );
};

export default WorkspaceList;
