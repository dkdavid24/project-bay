import { Link } from "react-router-dom";
import ProjPreview from "../components/ProjPreview";

import "../App.css";

const Home = () => {
    const results = [
        {
          id: 1,
          title: "Title 1",
          type: "webpage",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id. Eget felis eget nunc lobortis mattis aliquam faucibus. Sit amet est placerat in egestas erat. Risus quis varius quam quisque id diam vel quam. Aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit. Amet consectetur adipiscing elit ut aliquam purus sit amet. Vel pretium lectus quam id. Vitae aliquet nec ullamcorper sit amet risus. Pulvinar elementum integer enim neque volutpat ac tincidunt. Tortor pretium viverra suspendisse potenti nullam ac tortor. Urna cursus eget nunc scelerisque viverra mauris in.",
        },
        {
          id: 2,
          title: "Title 2",
          type: "webpage",
          description:
            "Lectus urna duis convallis convallis. Facilisis volutpat est velit egestas dui id ornare. Orci dapibus ultrices in iaculis nunc. Arcu odio ut sem nulla pharetra. Blandit volutpat maecenas volutpat blandit aliquam. Quis blandit turpis cursus in hac. Tellus orci ac auctor augue mauris. In ante metus dictum at tempor commodo ullamcorper a lacus. Arcu cursus euismod quis viverra. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Sed augue lacus viverra vitae congue eu consequat ac felis.",
        },
        {
          id: 3,
          title: "Title 3",
          type: "webpage",
          description:
            "Accumsan lacus vel facilisis volutpat est. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Eros in cursus turpis massa. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. In fermentum et sollicitudin ac. Ullamcorper dignissim cras tincidunt lobortis feugiat. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Aenean vel elit scelerisque mauris pellentesque. Interdum velit laoreet id donec ultrices tincidunt arcu. Condimentum id venenatis a condimentum. Felis eget nunc lobortis mattis.",
        },
        {
          id: 4,
          title: "Title 4",
          type: "webpage",
          description:
            "Laoreet suspendisse interdum consectetur libero id faucibus. Pharetra vel turpis nunc eget lorem dolor sed. Morbi leo urna molestie at elementum eu. Ut pharetra sit amet aliquam id diam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Gravida in fermentum et sollicitudin ac orci. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Turpis egestas pretium aenean pharetra magna ac placerat. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ut diam quam nulla porttitor massa id. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Et tortor at risus viverra adipiscing at. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Quis auctor elit sed vulputate. Vivamus arcu felis bibendum ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Id ornare arcu odio ut sem nulla. Et malesuada fames ac turpis egestas maecenas.",
        },
      ];
  return (
    <>
      <nav className="Header">
        <form onSubmit={(e)=>{ e.preventDefault() }}>
          <input type="text" name="search"></input>
          <input type="submit" value="Search"></input>
        </form>
        <div>
          <Link className="NavLink" to="/add">
            Add
          </Link>
          <Link className="NavLink" to="/login">
            Login/Sign up
          </Link>
        </div>
      </nav>
      <div className="Container">
        <form className="Form"  onSubmit={(e)=>{ e.preventDefault() }}>
          <label>Type</label>
          <input type="text" name="type"></input>
          <label>Hours to complete</label>
          <input type="number" name="low"></input>
          <input type="number" name="high"></input>
          <label>Stars</label>
          <input type="number" name="stars"></input>
          <input type="submit" value="Filter"></input>
        </form>
        <div>
          {results.map((project) => {
            return (
              <ProjPreview
                className="ProPreview"
                key={project.id}
                id={project.id}
                title={project.title}
                type={project.type}
                description={project.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
