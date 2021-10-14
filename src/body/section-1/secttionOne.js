import "./sectionOne.css";

const SectionOne = () => {
  const services = [
    { title: "Air Freight", icon: "fas fa-plane" },
    { title: "Sea Freight", icon: "fas fa-ship" },
    { title: "Inland", subTitle: "(Truck & badge)", icon: "fas fa-truck" },
    { title: "Custom clearance", icon: "fas fa-user-alt" },
  ];
  return (
    <>
      <div className="content content-one">
        <h4>Select a service</h4>
        <div id="main">
          {services.map((res) => (
            <div className="card" key={res.title}>
              {res.title}
              <br />
              {res.subTitle ? res.subTitle : ""}
              <i class={res.icon}></i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionOne;
