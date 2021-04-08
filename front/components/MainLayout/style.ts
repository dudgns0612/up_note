import styled from 'styled-components';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { flexContentCenter } from 'components/CommonStyles';

type SideMenuWapperProps = {
  isOpen: boolean;
};

export const LayoutWrapper = styled.div`
  height: calc(100vh - 3px);
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 80px;

  div:nth-child(1) {
    width: 10%;
    ${flexContentCenter}
  }
  div:nth-child(2) {
    width: 90%;
    ${flexContentCenter}
  }
  div:nth-child(3) {
    width: 10%;
    ${flexContentCenter}
  }

  @media only screen and (max-width: 800px) {
    div:nth-child(1) {
      width: 20%;
      ${flexContentCenter}
    }
    div:nth-child(2) {
      width: 60%;
      ${flexContentCenter}
    }
    div:nth-child(3) {
      width: 20%;
      ${flexContentCenter}
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 80px;
  margin: 0 15vw;
  height: 100%;

  @media only screen and (max-width: 800px) {
    margin: 0 5vw;
  }
`;

export const SideMenuWapper = styled.div<SideMenuWapperProps>`
  position: fixed;
  height: 100%;
  width: 400px;
  left: ${(props) => (props.isOpen ? '0px' : '-400px')};
  z-index: 3;
  top: 0;
  background-color: black;
  color: white;
  overflow-x: hidden;
  transition: 0.5s ease-in-out;
  border-right: 1px solid lightgrey;

  @media only screen and (max-width: 800px) {
    width: 90%;
    left: ${(props) => (props.isOpen ? '0px' : '-90%')};
  }
`;

export const MenuButton = styled(MenuOutlined)`
  font-size: 3vh;
`;

export const CloseButton = styled(CloseOutlined)`
  position: absolute;
  top: 0;
  right: 10px;
  margin: 15px;
  font-size: 30px;
  z-index: 1;
`;
