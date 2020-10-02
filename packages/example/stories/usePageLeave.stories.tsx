import React from 'react';
import { useImmer, usePageLeave } from '@powerfulyang/hooks';

export const PageLeave = () => {
  const [state, setState] = useImmer('in document');
  usePageLeave(() => {
    setState('leave');
  });
  return <>{state}</>;
};

export default {
  title: 'usePageLeave',
  component: PageLeave,
};
