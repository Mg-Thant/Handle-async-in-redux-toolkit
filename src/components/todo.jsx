import { useDispatch, useSelector } from "react-redux";
import { todoSliceActions } from "../store/reducer/todo";

const Todo = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.isLoading);
  const todos = useSelector((state) => state.todo.data);

  // fetch api
  const fetchTodo = async () => {
    try {
      dispatch(todoSliceActions.loadingHandler());
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      dispatch(todoSliceActions.getTodo(data));
      dispatch(todoSliceActions.loadingHandler());
    } catch (err) {
      alert("Please check your connection...")
    }
  };

  return (
    <>
      <button className="welcome-btn" onClick={fetchTodo}>
       {todos.length > 1 ?  <>Refresh Todo</> :  <>Get Todo</> }
      </button>
      {isLoading && <div className="loading"></div>}
      {!isLoading &&
        todos.map((todo) => (
          <section key={todo.id}>
            <h3>{todo.id}</h3>
            <p>{todo.title}</p>
          </section>
        ))}
      {!isLoading && todos.length < 1 && <section>Click get todo button to get your todo list</section>}
    </>
  );
};

export default Todo;
