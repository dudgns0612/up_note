import styled from 'styled-components';

export const WorkspaceHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  span {
    font-size: 20px;
    font-weight: 600;
  }

  h3 {
    display: inline;
    font-weight: 600;
  }
`;
