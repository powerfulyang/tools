import React, { FC, memo, ReactNode, useState } from 'react';
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

export enum HeadingEnum {
  H1 = 1,
  H2,
  H3,
  H4,
  H5,
}
const H1: FC = ({ children }) => {
  return (
    <h1 className="flex justify-center h-auto m-4">
      <span className={styles.heading1}>
        <span className={styles.prefix} />
        <span className={styles.content}>{children}</span>
        <span className={styles.suffix} />
      </span>
    </h1>
  );
};

const Head = (level: number, children: ReactNode) => {
  switch (level) {
    case HeadingEnum.H1:
      return <H1>{children}</H1>;
    case HeadingEnum.H2:
      return <h2 className="text-3xl font-semibold">{children}</h2>;
    case HeadingEnum.H3:
      return <h3 className="text-2xl font-medium">{children}</h3>;
    case HeadingEnum.H4:
      return <h4 className="text-xl font-medium">{children}</h4>;
    default:
      return children;
  }
};

export const Heading: FC<{ level: number }> = memo(({ level, children }) => {
  return <>{Head(level!, children)}</>;
});

export const Link: FC<{ href: string }> = ({ href, children }) => {
  return (
    <a className="font-medium text-blue-300" href={href}>
      {children}
    </a>
  );
};

export const BlockQuote: FC = ({ children }) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

export const List: FC<{ depth: number; ordered: boolean }> = (props) => {
  if (props.children![0].props.checked !== null) {
    return <ul className="p-2 border border-blue-500 border-solid">{props.children}</ul>;
  }
  if (props.ordered) {
    return <ul className={styles.list_ordered}>{props.children}</ul>;
  }
  if (props.depth % 2 === 0) {
    return <ul className={styles.list_even}>{props.children}</ul>;
  }
  return <ul className={styles.list_odd}>{props.children}</ul>;
};

export const ListItem: FC<{ checked: null | boolean; ordered: boolean; index: number }> = (
  props,
) => {
  return (
    <li>
      {props.ordered && (
        <span className="text-blue-300 pr-2 font-medium text-2xl">{props.index + 1}.</span>
      )}
      <span>{props.children}</span>
      {props.checked !== null && (
        <span className="pl-3 text-blue-300">{(props.checked && '√') || '×'}</span>
      )}
    </li>
  );
};

export const Table: FC = (props) => {
  return <table className={styles.table}>{props.children}</table>;
};
