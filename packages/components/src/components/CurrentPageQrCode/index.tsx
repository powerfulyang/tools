import React, { FC, useEffect, useRef } from 'react';
import QrCode from 'qrious';
import styles from './index.scss';

type Props = {};

export const CurrentPageQrCode: FC<Props> = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const qr = new QrCode({
      value: window.location.href,
      size: 100,
      level: 'Q',
    });
    const base64 = qr.toDataURL();
    if (ref.current) {
      const qrcode = new Image();
      qrcode.src = base64;
      const ctx = ref.current.getContext('2d');
      qrcode.onload = () => {
        ctx!.drawImage(qrcode, 0, 0);
      };
      const avatar = new Image();
      avatar.src =
        'https://lh3.googleusercontent.com/a-/AOh14GhPb7zfSSYTvNA6psX28gfeiA5br7m1iPhwq72_-Q=s96-c';
      avatar.onload = () => {
        ctx!.drawImage(avatar, 35, 35, 30, 30);
      };
    }
  }, []);

  return (
    <div className={styles.shareQrCode}>
      <canvas ref={ref} width={100} height={100} />
    </div>
  );
};
