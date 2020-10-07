import { useMount } from '@powerfulyang/hooks';
import defaultCur from './default.png';
import pointerCur from './pointer.png';

export const useDefaultCur = () => {
  useMount(() => {
    document.body.style.cursor = `url(${defaultCur}),auto`;
    document.querySelectorAll('a').forEach((draft) => {
      draft.style.cursor = `url(${pointerCur}),auto`;
    });
  });
};
