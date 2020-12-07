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
      level: 'H',
    });
    const base64 = qr.toDataURL();
    if (ref.current) {
      const qrcode = new Image();
      qrcode.src = base64;
      const ctx = ref.current.getContext('2d');
      ctx!.fillStyle = '#fff';
      const bgRectWidth = 105;
      const offset = (bgRectWidth - bgRectWidth) / 2;
      ctx!.fillRect(offset, offset, bgRectWidth, bgRectWidth);
      qrcode.onload = () => {
        const qrCodeWith = 95;
        const offset1 = (bgRectWidth - qrCodeWith) / 2;
        ctx!.drawImage(qrcode, offset1, offset1, qrCodeWith, qrCodeWith);
      };
      const avatar = new Image();
      avatar.src =
        'https://lh3.googleusercontent.com/a-/AOh14GhPb7zfSSYTvNA6psX28gfeiA5br7m1iPhwq72_-Q=s96-c';
      avatar.onload = () => {
        const avatarWith = 30;
        const offset2 = (bgRectWidth - avatarWith) / 2;
        ctx!.drawImage(avatar, offset2, offset2, avatarWith, avatarWith);
      };
    }
  }, []);

  return (
    <div className={styles.shareQrCode}>
      <canvas ref={ref} width={105} height={105} />
    </div>
  );
};
