import styled from 'styled-components';
import { themeBackgroundAndColor } from 'components/CommonStyles';
import { Input, Button } from 'antd';

export const FormWrapper = styled.div`
  margin: 30px 0px;
  overflow: auto;
`;

export const TitleInput = styled(Input)`
  margin-bottom: 10px;
`;

export const CreateButton = styled(Button)`
  float: right;
  margin: 20px 0px;
  ${themeBackgroundAndColor}
`;
