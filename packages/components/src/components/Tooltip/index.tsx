import React, { FC, ReactNode, useRef, MouseEvent } from 'react';
import classNames from 'classnames';
import { useImmer } from '@powerfulyang/hooks';
import './index.scss';
import { ReturnTypedFunction, getElementCenterPoint } from '@powerfulyang/utils';
import { PortalWrap } from '@/wrapper/PortalWrap';

type Props = {
  title?: ReactNode | ReturnTypedFunction<ReactNode>;
};

export const Tooltip: FC<Props> = ({ children, title }) => {
  const [visible, setVisible] = useImmer(false);
  const [tipPosition, setTipPosition] = useImmer({ left: 0, top: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const hoverWrap = (e: MouseEvent) => {
    setVisible(true);
    const { x, top } = getElementCenterPoint(wrapRef.current!);
    setTipPosition((draft) => {
      draft.left = x;
      draft.top = top;
    });
    // 中心点位置
    console.log(e);
  };

  const leaveWrap = (e: MouseEvent) => {
    setVisible(false);
    console.log(e);
  };
  return (
    <>
      <div
        onMouseOver={hoverWrap}
        onMouseOut={leaveWrap}
        onFocus={() => 0}
        onBlur={() => 0}
        ref={wrapRef}
      >
        {children}
      </div>
      <PortalWrap>
        <div className="wrap" style={tipPosition}>
          <div
            className={classNames('tooltip', {
              in: visible,
              fade: !visible,
            })}
          >
            <div className="arrow">
              <span className="content" />
            </div>
            {title && <div className="title">{title}</div>}
          </div>
        </div>
      </PortalWrap>
    </>
  );
};
