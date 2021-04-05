import MainLayout from 'components/MainLayout';
import dynamic from 'next/dynamic';
import { EditorProps } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

const Editor = dynamic<EditorProps>(() => import('@toast-ui/react-editor').then((m) => m.Editor), {
  ssr: false,
});

const CreatePage = () => {
  return (
    <MainLayout>
      <div style={{ textAlign: 'center', height: '80%' }}>
        <Editor
          previewStyle="tab"
          height="80%"
          initialEditType="markdown"
          usageStatistics={false}
        />
      </div>
    </MainLayout>
  );
};

export default CreatePage;
