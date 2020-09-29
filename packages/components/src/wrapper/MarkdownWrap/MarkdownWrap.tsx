import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Code, Heading } from './MarkdownElement';
import styles from './index.scss';

export type MarkdownWrapProps = {
  source: string;
};
export const MarkdownWrap: FC<MarkdownWrapProps> = ({ source }) => {
  return (
    <ReactMarkdown
      className={styles.markdown_body}
      source={source}
      renderers={{
        code: Code,
        heading: Heading,
      }}
    />
  );
};
