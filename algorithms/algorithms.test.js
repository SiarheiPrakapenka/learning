import { binSearch } from "./algorithms";

describe('algorithms', () => {
  it('binary search', () => {
    const arr = [1, 2, 3, 4, 5, 7, 9, 13, 16, 18, 22, 24];

    expect(binSearch(arr, 6)).toEqual(-1);
    expect(binSearch(arr, 2)).toEqual(1);
    expect(binSearch(arr, 16)).toEqual(8);
  })
});