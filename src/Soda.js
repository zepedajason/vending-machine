import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <img
        src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/208206/208206_p/208206"
        alt="soda"
      ></img>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Soda;
