import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <img
        src="https://thebasketry.com/cdn/shop/products/Zapps-VOODOO_grande.jpg?v=1650036460"
        alt="potato chips"
      ></img>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Chips;
