import { renderHook, act } from '@testing-library/react';
import useDebounce from '../utils/debounceHooks';

test('useDebounce calls the callback function after the specified timeout', () => {
    jest.useFakeTimers();
  
    let callbackCalled = false;
    const callback = (): void => {
      callbackCalled = true;
    };
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result, rerender } = renderHook(() =>
      useDebounce('test', 1000, callback)
    );
  
    expect(callbackCalled).toBe(false);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
  
    expect(callbackCalled).toBe(true);
  });