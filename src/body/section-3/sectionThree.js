import "./sectionThree.css";
import * as React from "react";
import { IOSSwitch } from "./swithButton";
import FormPropsTextFields from "./input";
import $ from "jquery";

const SectionThree = () => {
  $(document).ready(function () {
    //   $(".tab-slider--body").hide();
    //   $(".tab-slider--body:first").show();
    // });

    $(".tab-slider--nav li").click(function () {
      $(".tab-slider--body").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();
      if ($(this).attr("rel") == "tab2") {
        $(".tab-slider--tabs").addClass("slide");
      } else {
        $(".tab-slider--tabs").removeClass("slide");
      }
      $(".tab-slider--nav li").removeClass("active");
      $(this).addClass("active");
    });
  });
  return (
    <>
      <div className="content content-three">
        <div id="hed">
          <p id="crgo">Cargo Details</p>
          <div>
            <IOSSwitch />
            <p>Dangereous Cargo (ex. Chemicals, Battery)</p>
          </div>
        </div>
        <div id="details">
          <div class="tab-slider--nav">
            <ul class="tab-slider--tabs">
              <li class="tab-slider--trigger active" rel="tab1">
                Total Dimensions
              </li>
              <li class="tab-slider--trigger" rel="tab2">
                Package Details
              </li>
            </ul>
          </div>
        </div>
        <div id="final">
          <FormPropsTextFields text="cbm" header="Total Volume" />
          <FormPropsTextFields text="Kg" header="Total Weight" />
        </div>
      </div>
    </>
  );
};
export default SectionThree;
