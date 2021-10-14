import "./header.css";

const Header = () => {
  return (
    <div id="container">
      <div id="left">
        <a>
          Send<span>FREIGHT</span>
        </a>
        <div className="input">
          <input type="text" placeholder="Search" />
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div id="cal">
        <button>Request Quote</button>
        <button>Book Shipment</button>
      </div>
    </div>
  );
};

export default Header;
