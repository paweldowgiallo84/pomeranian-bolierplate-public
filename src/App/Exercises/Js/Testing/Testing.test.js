import { sum, handleClick } from './Testing';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

test('the data is peanut butter', async () => {
  const data = await Promise.resolve('peanut butter');
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await Promise.reject('error');
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('handleClick calls set state function', () => {
  const setIsVisibleMock = jest.fn();
  handleClick(true, setIsVisibleMock);
  expect(setIsVisibleMock).toHaveBeenCalled();
});

test('handleClick calls set state function with argument', () => {
  const setIsVisibleMock = jest.fn();
  handleClick(true, setIsVisibleMock);
  expect(setIsVisibleMock).toHaveBeenCalledWith(false);
});
