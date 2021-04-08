import MarkdonwEditor from 'components/MarkdownEditor';
import { FormWrapper, TitleInput } from './style';

const ItemSaveForm = () => {
  return (
    <FormWrapper>
      <TitleInput placeholder="제목을 입력하세요." />
      <MarkdonwEditor />
    </FormWrapper>
  );
};

export default ItemSaveForm;
