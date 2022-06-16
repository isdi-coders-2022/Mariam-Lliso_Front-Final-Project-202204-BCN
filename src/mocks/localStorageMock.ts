export const localStorageMock = (() => {
  let store: { [key: string]: any } = {};
  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
  };
})();
