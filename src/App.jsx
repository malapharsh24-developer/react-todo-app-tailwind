import "./App.css";
import Todo from "./components/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Todo />
      <ToastContainer />
    </>
  );
}

export default App;
