import { FormWrapper, DescriptionWrapper, LoginFormWrapper, KakaoButton } from './style';

const LoginForm = () => {
  return (
    <>
      <FormWrapper>
        <DescriptionWrapper img="/images/login_side.jpg">
          <span>up node</span>
          <p>Up note provides a simple memo function.</p>
          <p>Record your daily routine.</p>
        </DescriptionWrapper>
        <LoginFormWrapper>
          <span>Welcome to up_note</span>
          <a href="http://127.0.0.1:3001/auth/kakao/login">
            <KakaoButton src="images/kakao_login.png" />
          </a>
        </LoginFormWrapper>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
