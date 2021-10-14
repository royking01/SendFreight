import "./sectionFour.css";
import { IOSSwitch } from "./../section-3/swithButton";

const SectionFour = () => {
  const services = [
    {
      id: 1,
      heading: "Export Forwarding",
      subHeading: "We handle customs clearance and documentaion.",
    },
    {
      id: 2,
      heading: "Import Customs Clearance",
      subHeading: "We handle customs and regulatory requirements.",
    },
    {
      id: 3,
      heading: "Cargo Insurance",
      subHeading:
        "Protect your cargo from logistics risks up to its full value",
    },
    {
      id: 4,
      heading: "Transport / Delivery",
      subHeading: "We deliver the cargo to your door step from the ports.",
    },
  ];
  let serviceList = [];
  services.forEach((item, index) => {
    serviceList.push();
  });
  return (
    <>
      <div className="content content-two">
        <div id="crgo">
          <p>Additional Services</p>
        </div>
        <div className="details">
          <div className="parent tesxts">
            {services.map((res) => (
              <>
                <div className="res">
                  <div>
                    <IOSSwitch />
                  </div>
                  <p className="card" key={res.id}>
                    {res.heading}
                    <span>{res.subHeading}</span>
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionFour;
