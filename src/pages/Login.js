import { Link } from "react-router-dom";

import "../App.css";

const Login = () => {
  return (
    <>
      <nav className="Header">
        <form>
          <input type="text" name="search"></input>
          <input type="submit" value="Search"></input>
        </form>
        <div>
          <Link className="NavLink" to="/add">
            Add
          </Link>
          <Link className="NavLink" to="/">
            Home
          </Link>
        </div>
      </nav>
      <div className="LoginContainer">
        <form className="Form">
          <label>Username</label>
          <input type="text" name="type"></input>
          <label>Password</label>
          <input type="password" name="password"></input>
          <input type="submit" value="Filter"></input>
        </form>
        <form className="Form">
          <label>Username</label>
          <input type="text" name="type"></input>
          <label>Email</label>
          <input type="text" name="email"></input>
          <label>Password</label>
          <input type="password" name="password"></input>
          <label>Confirm password</label>
          <input type="password" name="c_password"></input>
          <input type="submit" value="Filter"></input>
        </form>
      </div>
    </>
  );
};

export default Login;
