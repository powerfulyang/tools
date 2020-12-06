import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { useImmer } from '@powerfulyang/hooks';
import styles from './index.scss';

type Props = {
  title?: string;
  popoverContent?: ReactElement;
};

export const Tooltip: FC<Props> = ({ children, title, popoverContent }) => {
  const [visible, setVisible] = useImmer(false);
  const [hidden, setHidden] = useImmer(true);
  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => {
        setHidden(false);
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      <div
        className={classNames(styles.tooltip, {
          [styles.in]: visible,
          [styles.fade]: !visible,
          [styles.hidden]: hidden,
        })}
        onTransitionEnd={() => {
          if (!visible) {
            setHidden(true);
          }
        }}
      >
        <div className={styles.arrow}>
          <span className={styles.content} />
        </div>
        {title && <div className={styles.title}>{title}</div>}
        {popoverContent}
      </div>
      {children}
    </div>
  );
};
