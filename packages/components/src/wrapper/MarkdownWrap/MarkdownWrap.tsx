import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { BlockQuote, Code, Heading, Link, List, ListItem, Table } from './MarkdownElement';
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
        link: Link,
        blockquote: BlockQuote,
        list: List,
        listItem: ListItem,
        table: Table,
      }}
    />
  );
};
