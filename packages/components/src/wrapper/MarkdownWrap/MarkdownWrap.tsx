import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export type MarkdownWrapProps = {
  source: string;
};

export const MarkdownWrap: FC<MarkdownWrapProps> = ({ source }) => {
  return <ReactMarkdown plugins={[gfm]}>{source}</ReactMarkdown>;
};
