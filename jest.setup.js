import "@testing-library/jest-dom/extend-expect";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
  };
