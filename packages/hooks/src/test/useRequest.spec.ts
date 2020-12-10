import { renderHook } from '@testing-library/react-hooks';
import { UseRequest, useRequest } from '..';

describe('useRequest', () => {
  it('should ', (done) => {
    UseRequest.baseUrl = 'https://api.powerfulyang.com';
    const { result } = renderHook(() => {
      return useRequest({ url: '/api/posts/1' });
    });
    setTimeout(() => {
      const data = result.current[0];
      expect(data).toHaveProperty('status', 'ok');
      done();
    }, 500);
  });
});
