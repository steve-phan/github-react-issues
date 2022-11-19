import { renderHook } from "@testing-library/react";

import { usePagination } from "./usePagination";

describe("usePagination", () => {
  it("should render correctly as expected", () => {
    const list = [
      {
        input: {
          totalCount: 30,
          currentPage: 1,
          pageSize: 5,
          siblingCount: 1,
        },
        expectedResult: [1, 2, 3, 4, 5, 6],
      },
      {
        input: {
          totalCount: 90,
          currentPage: 1,
          pageSize: 5,
          siblingCount: 3,
        },
        expectedResult: [1, 2, 3, 4, 5, 6, 7, 8, 9, "DOTS", 18],
      },
      {
        input: {
          totalCount: 90,
          currentPage: 1,
          pageSize: 10,
          siblingCount: 1,
        },
        expectedResult: [1, 2, 3, 4, 5, "DOTS", 9],
      },
      {
        input: {
          totalCount: 30,
          currentPage: 1,
          pageSize: 15,
          siblingCount: 5,
        },
        expectedResult: [1, 2],
      },
    ];

    list.forEach(({ input, expectedResult }) => {
      const { result } = renderHook(() => usePagination(input));

      expect(result.current).toEqual(expectedResult);
    });
  });
});
