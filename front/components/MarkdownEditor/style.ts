import styled from 'styled-components';
import { themeBackgroundAndColor } from 'components/CommonStyles';

export const MarkdownEditorWrapper = styled.div`
  .mde-header {
    ${themeBackgroundAndColor}
  }

  .mde-preview-content {
    padding: 20px 40px;
  }

  svg {
    color: white;
  }
`;
