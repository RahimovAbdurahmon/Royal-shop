import { Link } from "react-router-dom";
import notFound from "../../assets/images/notFound.jpg"

const NotFound = () => {
  return (
    <div>
      <Link >
        <img src={notFound} alt="" />
      </Link>
    </div>
  );
};

export default NotFound;
