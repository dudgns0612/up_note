import MainLayout from 'components/MainLayout';
import WorkspaceList from 'components/WorkspaceList';
import WorkspaceHeader from 'components/WorkspaceHeader';

const WorkspacePage = () => {
  return (
    <MainLayout>
      <>
        <WorkspaceHeader />
        <WorkspaceList />
      </>
    </MainLayout>
  );
};

export default WorkspacePage;
