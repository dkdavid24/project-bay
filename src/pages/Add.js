import { Link } from "react-router-dom";

import "../App.css";

const Add = () => {
  return (
    <>
      <nav className="Header">
        <form  onSubmit={(e)=>{ e.preventDefault() }}>
          <input type="text" name="search"></input>
          <input type="submit" value="Search"></input>
        </form>
        <div>
          <Link className="NavLink" to="/">
            Home
          </Link>
          <Link className="NavLink" to="/login">
            Login/Sign up
          </Link>
        </div>
      </nav>
      <form className="AddForm"  onSubmit={(e)=>{ e.preventDefault() }}>
        <label>Title</label>
        <input type="text" name="title"></input>
        <label>Type</label>
        <input type="text" name="type"></input>
        <label>Duration</label>
        <div>
          <input type="number"></input>
          <input type="number"></input>
        </div>
        <label>Description</label>
        <textarea rows="10"></textarea>
        <label></label>
        <input type="submit" value="Add"></input>
      </form>
    </>
  );
};

export default Add;
