import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ReactMdeProps } from 'react-mde';
import dynamic from 'next/dynamic';
import { MarkdownEditorWrapper } from './style';
import 'react-mde/lib/styles/css/react-mde-all.css';

const MdeEditor = dynamic<ReactMdeProps>(() => import('react-mde'), {
  ssr: false,
});

const MarkdownEditor = () => {
  const [value, setValue] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<'write' | 'preview'>('write');

  return (
    <MarkdownEditorWrapper>
      <MdeEditor
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(<ReactMarkdown source={markdown} />)
        }
        maxEditorHeight={500}
        minEditorHeight={500}
        minPreviewHeight={500}
      />
    </MarkdownEditorWrapper>
  );
};
export default MarkdownEditor;
