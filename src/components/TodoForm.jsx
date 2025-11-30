import { useState } from "react";

export default function TodoForm({addTodoFunction}) {
  const [inputTodo, setInputTodo] = useState("");
  // Controlled inputn handle input change
  function handleInput(e) {
    setInputTodo(e.target.value);
  }

  function handleFormSubmit (event) {
    event.preventDefault();
    addTodoFunction(inputTodo);
    setInputTodo("");
  }
  return (
      <section className="Form">
        <form
          className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]
 border-blue-700 rounded-sm overflow-hidden border-2 mx-auto flex mb-8"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            placeholder="Enter todo ..."
            value={inputTodo}
            onChange={(e) => handleInput(e)}
            className="flex-1 border-2 outline-none border-none rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-8 py-1 text-gray-50 bg-blue-700 cursor-pointer"
          >
            Add Todo
          </button>
        </form>
      </section>
  );
}
