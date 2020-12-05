import React, { FC } from 'react';
import { Icon } from '..';

type Props = {};

export const ShowQrCode: FC<Props> = ({ children }) => {
  return (
    <>
      <Icon pointer onMouseEnter={() => {}} type="icon-ico" />
      {children}
    </>
  );
};
