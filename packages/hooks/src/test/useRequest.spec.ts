import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
import { UseRequest, useRequest } from '..';

describe('useRequest', () => {
  let requestHooks: RenderHookResult<{ id: number }, readonly [boolean, any]>;

  beforeAll(() => {
    UseRequest.baseUrl = 'https://api.powerfulyang.com';
    requestHooks = renderHook(
      ({ id }) => {
        return useRequest({
          url: `/api/posts/${id}`,
        });
      },
      { initialProps: { id: 1 } },
    );
  });

  it('should ', async () => {
    const { result } = requestHooks;
    let [loading, post] = result.current;
    expect(loading).toBe(true);
    expect(post).toBeUndefined();
    await requestHooks.waitForNextUpdate();
    [loading, post] = result.current;
    expect(loading).toBe(false);
    expect(post).toHaveProperty('status', 'ok');
  });
});
