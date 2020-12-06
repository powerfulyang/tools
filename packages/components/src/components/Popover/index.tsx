import React, { FC, ReactElement } from 'react';
import { Tooltip } from '@/components/Tooltip';

type Props = {
  popoverContent: ReactElement;
};

export const Popover: FC<Props> = ({ children, popoverContent }) => {
  return <Tooltip popoverContent={popoverContent}>{children}</Tooltip>;
};
