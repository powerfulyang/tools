import React from 'react';
import { useDefaultCur, useTwitterFavorite } from '@powerfulyang/components';

export const TwitterFav = () => {
  useTwitterFavorite();
  useDefaultCur();
  return (
    <>
      <div>尼嚎</div>
      <a href="">我是机器人</a>
    </>
  );
};

export default {
  title: 'useTwitterFav',
  component: TwitterFav,
};
