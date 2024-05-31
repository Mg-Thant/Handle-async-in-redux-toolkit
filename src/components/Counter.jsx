import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShow);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const increaseHandler = () => {
    dispatch(counterAction.increase());
  };

  const decreaseHandler = () => {
    dispatch(counterAction.decrease());
  };

  const increaseBy5Handler = () => {
    dispatch(counterAction.increaseBy5(10));
  };

  const toggleHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
      <>
      {isLogin && (
        <section>
          <h3>Redux Counter</h3>
          {isShow && <h1>{counter}</h1>}
          <hr />
          <div>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={increaseBy5Handler}>IncreaseBy5</button>
            <button onClick={decreaseHandler}>Decrease</button>
            <button onClick={toggleHandler}>Toggle Counter</button>
          </div>
        </section>
      )}</>
  );
};

export default Counter;
