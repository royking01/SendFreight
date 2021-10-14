import "./body.css";
import SectionOne from "./section-1/secttionOne";
import SectionTwo from "./section-2/sectionTwo";
import SectionThree from "./section-3/sectionThree";
import SectionFour from "./section-4/sectionFour";
const Body = () => {
  return (
    <>
      <div className="container">
        <div id="top">
          <i class="fas fa-arrow-left"></i>
          <h2>New Booking</h2>
          <p>
            Fill in the information below to get a quote or create a new booking
          </p>
        </div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </>
  );
};

export default Body;
