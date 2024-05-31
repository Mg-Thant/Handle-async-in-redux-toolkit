import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/authReducer";

const NavBar = () => {
    const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const logoutHandler = () => {
    dispatch(authAction.loginOut());
  }

  return (
    <nav>
      <h1>Redux Counter</h1>
      {isLogin && (
        <>
          <ul>
            <li>My Record</li>
          </ul>
          <ul>
            <li>Profile</li>
          </ul>
          <ul>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default NavBar;
