import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function ListBox() {
  return (
    <div>
      <Link to>
        <img src="https://picsum.photos/150" alt="" />
        <h3>마시그래이 동성로점</h3>
        <p>
          <FaLocationDot />
          37.5m
        </p>
      </Link>
    </div>
  );
}

export default ListBox;
