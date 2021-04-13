import styled from 'styled-components';
import { flexContentCenter } from 'components/CommonStyles';

export const SiderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px;
  overflow: auto;
`;

export const MenuWrapper = styled.div`
  height: 90%;
  font-size: 2.5vh;
`;

export const MenuHeader = styled.span`
  display: block;
  font-size: 4vh;
  margin-bottom: 20px;
`;

export const FooterWrapper = styled.div`
  height: 10%;
  position: relative;
  ${flexContentCenter}
  font-size: 2vh;
`;
