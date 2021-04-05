import styled from 'styled-components';

type DescriptionWrapperProps = {
  img: string;
};

export const FormWrapper = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 5px 10px 10px 1px rgba(192, 192, 192, 0.7);
  background-color: white;

  @media only screen and (max-width: 800px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const DescriptionWrapper = styled.div<DescriptionWrapperProps>`
  width: 50%;
  height: 100%;
  background-image: url(${(props) => props.img});
  color: white;
  padding: 40px;
  box-sizing: border-box;

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 50%;
  }

  span {
    display: block;
    font-size: 35px;
    font-weight: 800;
    margin-bottom: 50px;
  }

  p {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 50%;
  }

  span {
    display: block;
    font-size: 20px;
    font-weight: 600;
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;

export const KakaoButton = styled.img`
  padding: 20px;
  border-top: solid 1px gray;
`;
