import { useDispatch } from "react-redux";
import { authAction } from "../store/authReducer";
import { useSelector } from "react-redux";

const Welcome = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const loginHandler = () => {
    dispatch(authAction.login());
  };

  return (
    <>
      {!isLogin && (
        <button className="welcome-btn" onClick={loginHandler}>
          Login to Redux Counter
        </button>
      )}
    </>
  );
};

export default Welcome;
