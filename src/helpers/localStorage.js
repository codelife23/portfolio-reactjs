export const getValueFromLocalStorage = (localStorageKey) => {
  const localStorageValue = localStorage.getItem(localStorageKey);

  if (localStorageValue) {
    return JSON.parse(localStorageValue);
  }

  return null;
};

export const setValueToLocalStorage = (localStorageKey, value) => {
  localStorage.setItem(localStorageKey, JSON.stringify(value));
};
