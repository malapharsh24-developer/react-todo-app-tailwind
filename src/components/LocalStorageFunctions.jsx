const localStorage_key = "react-todo";

export function getLocalStorageData() {
  const storedTodos = localStorage.getItem(localStorage_key);
  if (!storedTodos) {
    const defaultTodos = [];
    localStorage.setItem(localStorage_key, JSON.stringify(defaultTodos));
    return defaultTodos;
  }
  return JSON.parse(storedTodos);
}

export function setLocalStorageData(todoList) {
  return localStorage.setItem(localStorage_key, JSON.stringify(todoList));
}
