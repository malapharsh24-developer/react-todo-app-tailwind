export default function List({ todo, index, onHandleDelete, onHandleStatus }) {
  function handleDeleteTodo(id) {
    onHandleDelete(id);
  }
  function handleStatus(id) {
    onHandleStatus(id);
  }

  return (
    <tr className="hover:bg-gray-50 text-[10px] xs:text-xs sm:text-sm">
      {/* ID */}
      <td className="border border-gray-300 px-2 py-2 truncate text-center">
        {todo.id}
      </td>

      {/* Todo Title */}
      <td
        className={`border border-gray-300 px-2 py-2 whitespace-normal break-words ${
          todo.status === "Completed" ? "line-through" : ""
        }`}
      >
        {todo.title}
      </td>

      {/* Status */}
      <td className="border border-gray-300 px-2 py-2 whitespace-normal break-words text-center">
        <span
          className={`px-2 py-1 rounded whitespace-normal break-words block w-full text-center
            ${
              todo.status === "Completed"
                ? "bg-green-500 text-green-950"
                : "bg-amber-200 text-amber-700"
            }`}
        >
          {todo.status}
        </span>
      </td>

      {/* Mark as Complete */}
      <td className="border border-gray-300 px-2 py-2 whitespace-normal break-words text-center">
        <button
          onClick={() => handleStatus(todo.id)}
          className="border-2 rounded text-[10px] xs:text-xs sm:text-sm px-2 py-1 w-full leading-tight whitespace-normal break-words"
        >
          {todo.status === "Pending" ? (
            <i>Mark as Complete</i>
          ) : (
            <i>Mark as Incomplete</i>
          )}
        </button>
      </td>

      {/* Delete */}
      <td className="border border-gray-300 px-2 py-2 text-center">
        <span
          onClick={() => handleDeleteTodo(todo.id)}
          className="text-sm sm:text-lg text-red-600 cursor-pointer"
        >
          &#128465;
        </span>
      </td>
    </tr>
  );
}
