import React, { FC, memo, ReactNode, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import classNames from 'classnames';
import styles from './index.scss';
import { Icon } from '../../components/Icon/Icon';

type CodeProps = {
  value: string;
  language: string;
};
export const Code: FC<CodeProps> = memo(({ value = '', language }) => {
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
      return <h2>{children}</h2>;
    case HeadingEnum.H3:
      return <h3>{children}</h3>;
    case HeadingEnum.H4:
      return <h4>{children}</h4>;
    default:
      return children;
  }
};

export const Heading: FC<{ level: number }> = memo(({ level, children }) => {
  return <>{Head(level!, children)}</>;
});

export const Link: FC<{ href: string }> = ({ href, children }) => {
  return (
    <a className="font-medium text-blue-600 border-b-2" href={href}>
      {children}
    </a>
  );
};

export const BlockQuote: FC = ({ children }) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

export const List: FC<{ depth: number; ordered: boolean }> = (props) => {
  if (props.children![0].props.checked !== null) {
    return <ul className={styles.task_list_parent}>{props.children}</ul>;
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
    <li
      className={classNames({
        [styles.task_list]: props.checked !== null,
      })}
    >
      {props.checked === true && (
        <div className={styles.icon}>
          <Icon type="icon-yiwancheng" className={styles.done} />
        </div>
      )}
      {props.checked === false && (
        <div className={styles.icon}>
          <Icon type="icon-weiwancheng" className={styles.undone} />
        </div>
      )}
      {props.ordered && (
        <span className="text-blue-600 pr-2 text-sm font-medium">{props.index + 1}.</span>
      )}
      <span
        className={classNames(
          {
            [styles.content_done]: props.checked,
            [styles.content_undone]: !props.checked,
          },
          styles.list_content,
        )}
      >
        {props.children}
      </span>
    </li>
  );
};

export const Table: FC = (props) => {
  return <table className={styles.table}>{props.children}</table>;
};
