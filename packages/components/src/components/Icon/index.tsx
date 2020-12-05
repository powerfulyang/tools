import React, { FC, memo } from 'react';
import classNames from 'classnames';
import styles from './index.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: string;
  pointer?: boolean;
}

export const Icon: FC<IconProps> = memo(({ className, type, pointer, ...restProps }) => {
  return (
    <svg
      className={classNames(className, styles.super_icon, { [styles.super_icon_pointer]: pointer })}
      aria-hidden="true"
      {...restProps}
    >
      <use xlinkHref={`#${type}`} />
    </svg>
  );
});
