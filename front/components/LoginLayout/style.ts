import styled from 'styled-components';
import { flexContentCenter } from 'components/CommonStyles';

export const LayoutWrapper = styled.div`
  ${flexContentCenter}
  height: calc(100vh - 3px);
  box-sizing: border-box;
  background-color: #efefef;
`;
