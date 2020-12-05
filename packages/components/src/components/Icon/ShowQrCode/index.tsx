import React, { FC } from 'react';
import { Icon } from '..';

type Props = {};

export const ShowQrCode: FC<Props> = ({ children }) => {
  return (
    <span className="pointer">
      <Icon pointer onMouseEnter={() => {}} type="icon-ico" />
      {children}
    </span>
  );
};
