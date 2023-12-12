export const saveToLocal = (key, obj) => {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
    console.error('Error save localStorage:', error);
  }
};

export const getFromLocal = key => {
  try {
    const storedItem = localStorage.getItem(key);

    if (storedItem) {
      return JSON.parse(storedItem);
    }

    return null;
  } catch (error) {
    console.error('Error get localStorage:', error);
    return null;
  }
};

export const deleteInLocal = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error delete localStorage:', error);
  }
};
