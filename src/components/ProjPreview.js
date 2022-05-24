import { Link } from "react-router-dom"

const ProjPreview = (props) => {
  return (
    <Link to={`/project/${props.id}`}>
      <h2>{props.title}</h2>
      <h3>{props.type}</h3>
      <p>{props.description.substring(0, 100).trim()}...</p>
    </Link>
  );
};

export default ProjPreview;
