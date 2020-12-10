import { renderHook } from '@testing-library/react-hooks';
import { Subject } from 'rxjs';
import { UseRequest, useRequest } from '..';

describe('useRequest', () => {
  it('should ', (done) => {
    const subject = new Subject();
    UseRequest.baseUrl = 'https://api.powerfulyang.com';

    const requestHooks = renderHook(
      (id: number) => {
        return useRequest({
          url: `/api/posts/${id}`,
          async resTransform(res) {
            const result = await res.json();
            subject.next(result);
          },
        });
      },
      { initialProps: 1 },
    );

    subject.subscribe(
      (data: any) => {
        expect(data).toHaveProperty('status', 'ok');
        if (data.data.id === 2) {
          subject.error(0);
        }
        requestHooks.rerender(2);
      },
      () => {
        done();
      },
    );
  });
});
