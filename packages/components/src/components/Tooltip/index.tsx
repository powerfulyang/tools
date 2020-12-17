import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { useImmer } from '@powerfulyang/hooks';
import './index.scss';

type Props = {
  title?: string;
  popoverContent?: ReactElement;
};

export const Tooltip: FC<Props> = ({ children, title, popoverContent }) => {
  const [visible, setVisible] = useImmer(false);
  const [hidden, setHidden] = useImmer(true);
  return (
    <div
      className="wrap"
      onMouseEnter={() => {
        setHidden(false);
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      <div
        className={classNames('tooltip', {
          in: visible,
          fade: !visible,
          hidden,
        })}
        onTransitionEnd={() => {
          if (!visible) {
            setHidden(true);
          }
        }}
      >
        <div className="arrow">
          <span className="content" />
        </div>
        {title && <div className="title">{title}</div>}
        {popoverContent}
      </div>
      {children}
    </div>
  );
};
