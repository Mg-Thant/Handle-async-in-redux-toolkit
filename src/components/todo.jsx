import todo, { getTodo } from "../reducer/todo";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const dispatch = useDispatch();
  const getTodoHandler = () => {
    dispatch(getTodo());
    console.log(todos);
  };

  return (
    <>
      <button className="welcome-btn" onClick={getTodoHandler}>
        Get Todo
      </button>
      {isLoading && <span className="loading"></span>}
      {!isLoading &&
        todos.map((todo) => (
          <section>
            <p>{todo.title}</p>
          </section>
        ))}
        {!isLoading && todos.length < 1 && <p>Click get todo button to get your todo list</p>}
    </>
  );
};

export default Todo;
