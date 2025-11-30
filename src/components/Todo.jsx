import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import TodoForm from "./TodoForm";
import List from "./List";
import TableHeader from "./TableHeader";
import Header from "./Header";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "./LocalStorageFunctions";
import Capitalize from "../Helpers/Capitalize";
import { toast } from "react-toastify";




export default function Todo() {
  const [todoList, setTodoList] = useState(() => getLocalStorageData());

  useEffect(() => {
    setLocalStorageData(todoList);
  }, [todoList]);

  // handle form submit
  function handleFormSubmit(inputTodo) {
    if (!inputTodo.trim()) return toast.error("Todo can't be empty !");
    // handle duplicate todo
    if(todoList.find(todo => todo.title.trim().toLowerCase() === inputTodo.trim().toLowerCase())) return toast.error("Todo already exists !");
    setTodoList((prevtodo) => [
      ...prevtodo,
      { id: nanoid(), title: Capitalize(inputTodo), status: "Pending" },
    ]);
    toast.success("New todo added succesfully !");
    setLocalStorageData(todoList);
  }
  // handle delete todo
  function handleDeleteTodo(id) {
    const todoAfterDelete = todoList.filter((todo) => todo.id != id);
    setTodoList(todoAfterDelete);
  }
  // handle todo status change
  function handleStatus(id) {
    setTodoList((prevtodos) =>
      prevtodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status == "Pending" ? "Completed" : "Pending",
            }
          : todo
      )
    );
  }

  return (
    <>
      <Header />
      <TodoForm addTodoFunction={handleFormSubmit} />
      <div className="overflow-x-auto w-full">
        {todoList.length == 0 ? (
          <h2>No tasks yet.</h2>
        ) : (
          <>
            <table className="w-full table-fixed border border-gray-300 text-sm md:text-base text-xs overflow-hidden">
              <TableHeader />
              <tbody>
                {todoList.map((todo, i) => {
                  return (
                    <List
                      todo={todo}
                      index={i}
                      onHandleDelete={handleDeleteTodo}
                      onHandleStatus={handleStatus}
                      key={i}
                    />
                  );
                })}

                {/* copy other rows below */}
              </tbody>
            </table>
            <button
              onClick={() => setTodoList([])}
              className="bg-red-600 text-gray-50 px-4 py-1 rounded my-8 cursor-pointer"
            >
              Clear all
            </button>
          </>
        )}
      </div>
    </>
  );
}
