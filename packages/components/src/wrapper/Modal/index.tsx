import React, { FC, HTMLAttributes, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import './index.scss';

const ModalWrap: FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...restProps }) => {
  const dialogNode = useMemo(() => {
    const dialogNode2 = document.createElement('div');
    document.body.appendChild(dialogNode2);
    return dialogNode2;
  }, []);
  const originalOverflowCallback = useRef('');

  useEffect(() => {
    const { style } = document.body;
    originalOverflowCallback.current = style.overflow;
    style.overflow = 'hidden';

    return () => {
      style.overflow = originalOverflowCallback.current;
      document.body.removeChild(dialogNode);
    };
  }, [dialogNode]);

  return createPortal(
    <div className="yang-utils-modal-wrap" {...restProps}>
      {children}
    </div>,
    dialogNode,
  );
};

ModalWrap.displayName = 'ModalWrap';

export default ModalWrap;
