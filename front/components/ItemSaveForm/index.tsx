import MarkdonwEditor from 'components/MarkdownEditor';
import { FormOutlined } from '@ant-design/icons';
import { FormWrapper, TitleInput, CreateButton } from './style';

const ItemSaveForm = () => {
  return (
    <FormWrapper>
      <TitleInput placeholder="제목을 입력하세요." />
      <MarkdonwEditor />
      <CreateButton
        type="primary"
        shape="round"
        size="large"
        icon={<FormOutlined />}
      >
        저장
      </CreateButton>
    </FormWrapper>
  );
};

export default ItemSaveForm;
