import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Code } from './Code';

type MarkdownWrapProps = {
  source: string;
};
export const MarkdownWrap: FC<MarkdownWrapProps> = ({ source }) => {
  return <ReactMarkdown source={source} renderers={{ code: Code }} />;
};
