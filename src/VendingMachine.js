import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>VENDING MACHINE</h1>
      <p>
        Click for <Link to="/chips">Chips</Link>
      </p>
      <p>
        Click for <Link to="/candy">Candy</Link>
      </p>
      <p>
        Click for <Link to="/soda">Soda</Link>
      </p>
    </div>
  );
}

export default VendingMachine;
