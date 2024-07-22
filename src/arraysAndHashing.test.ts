import { sum } from './arraysAndHashing';

describe('Base', () => {
  it('returns 4', () => {
    expect(sum()).toEqual(4);
  }),
    it('returns type number', () => {
      expect(typeof sum()).toEqual('number');
    });
});
