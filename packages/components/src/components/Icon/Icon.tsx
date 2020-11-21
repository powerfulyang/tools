import React, { FC, memo, SVGProps } from 'react';
import classNames from 'classnames';
import styles from './index.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
  type: string;
}

export const Icon: FC<IconProps> = memo(({ className, type, ...restProps }) => {
  return (
    <svg className={classNames(className, styles.super_icon)} aria-hidden="true" {...restProps}>
      <use xlinkHref={`#${type}`} />
    </svg>
  );
});
