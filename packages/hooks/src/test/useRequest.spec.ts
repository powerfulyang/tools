import { renderHook } from '@testing-library/react-hooks';
import { UseRequest, useRequest } from '..';

describe('useRequest', () => {
  it('should ', () => {
    UseRequest.baseUrl = 'https://api.powerfulyang.com';
    const { result } = renderHook(() => {
      return useRequest({ url: '/api/posts/1' });
    });
    setTimeout(() => {
      expect(result.current[0]).toHaveProperty('status', 'ok');
    }, 500);
  });
});
