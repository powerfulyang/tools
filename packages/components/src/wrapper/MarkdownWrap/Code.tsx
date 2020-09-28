import React, { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeProps = {
  value?: string;
  language?: string;
};
export const Code: FC<CodeProps> = ({ value = '', language = 'javascript' }) => {
  return (
    <SyntaxHighlighter showLineNumbers language={language} style={style}>
      {value}
    </SyntaxHighlighter>
  );
};
