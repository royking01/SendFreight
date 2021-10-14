import "./sectionTwo.css";

const SectionTwo = () => {
  const fromCity = document.getElementById("fromCity");
  const tuCl = (clicked, hide) => {
    console.log({ clicked, hide });
    let hide_ = document.getElementsByClassName(hide);
    for (var i = 0; i < hide_.length; i++) {
      console.log(i);
      console.log(hide_[i].style);
      !hide_[i].style.display || hide_[i].style.display == "contents"
        ? (hide_[i].style.display = "none")
        : (hide_[i].style.display = "contents");
    }
    // hide_.map((item, i) => console.log(item, i));
    return;
    // style.diplay = "none";
  };
  const inpVal = (e) => {};
  return (
    <>
      <div className="content content-two">
        <div id="up">
          <i class="fas fa-exclamation-circle alt"></i>
        </div>
        <div id="details">
          <div id="cto">
            <button>Import</button>
            <button>Export</button>
          </div>
          <div className="input location">
            <i class="fas fa-map-marker-alt"></i>
            <p className="fCity">From</p>
            <input
              type="text"
              placeholder="City or Port"
              id="fromCity"
              onClick={() => tuCl("from", "fCity")}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="input location">
            <i class="fas fa-map-marker-alt"></i>
            <p className="iCity">To</p>
            <input
              type="text"
              placeholder="City or Port"
              id="toCity"
              onClick={() => tuCl("to", "iCity")}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
        <div id="final">
          <div className="input location">
            <i class="fas fa-calendar"></i>
            <p className="iCity">Ready Date</p>
            <input type="text" id="start" name="trip-start" />
          </div>
          <div className="input location">
            <p className="iCity">Incoterms</p>
            <input type="text" id="start" />
            <i class="fas fa-sort-down"></i>
          </div>
          <div className="input location">
            <p className="iCity">Total Cargo Value</p>
            <input type="text" placeholder="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionTwo;
