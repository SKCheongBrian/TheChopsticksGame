import React from "react";
import Faq from "react-faq-component";
import "./Accordion.css";

export default function Accordion() {
  const data = {
    // title: "How to play:",
    rows: [
        {
            title: "HOW TO PLAY:",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
    ],
};
const styles = {
  bgColor: "#393E46",
  titleTextColor: "#EEEEEE",
  rowTitleColor: "#EEEEEE",
  rowContentColor: '#EEEEEE',
  arrowColor: "#EEEEEE",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
  expandIcon: "+",
  collapseIcon: "-",
};
  return (
    <div className="faq-style-wrapper" >
      <Faq data={data} styles={styles} config={config}/>
    </div>
  );
}