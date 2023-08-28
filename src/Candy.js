import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <h1>Candy</h1>
      <img
        src="https://weinersltd.com/cdn/shop/products/31120-Airheads-Xtremes-Rainbow-Berry-Candy-front2_600x.jpg?v=1622143043"
        alt="candy"
      ></img>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Candy;
