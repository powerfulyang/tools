import React, { FC, memo, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './index.scss';

type CodeProps = {
  value: string;
  language: string;
};
export const Code: FC<CodeProps> = memo(({ value, language }) => {
  const [showLanguage] = useState(language || 'javascript');
  return (
    <SyntaxHighlighter showLineNumbers language={showLanguage} style={style}>
      {value}
    </SyntaxHighlighter>
  );
});

type HeadingProps = { level: number };
export enum HeadingEnum {
  H1 = 1,
  H2,
  H3,
  H4,
  H5,
}
const H1: FC = ({ children }) => {
  return (
    <div className="flex justify-center m-4 h-auto">
      <h1 className={styles.heading1}>
        <span className={styles.prefix} />
        <span className={styles.content}>{children}</span>
        <span className={styles.suffix} />
      </h1>
    </div>
  );
};
export const Heading: FC<HeadingProps> = memo(({ level, children }) => {
  return <>{level === HeadingEnum.H1 && <H1>{children}</H1>}</>;
});
