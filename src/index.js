import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SectionsContainer, Section, Header, Footer } from "react-fullpage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

const Example = () => {
  let options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: "SectionContainer", // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: "Section", // the section class name
    sectionPaddingTop: "0", // the section top padding
    sectionPaddingBottom: "0", // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
  };
  return (
    <div>
      <SectionsContainer className="container" {...options}>
        <Section className="custom-section" color="#000">
          <Page1 />
        </Section>
        <Section color="#000">
          <Page2 />
        </Section>
        <Section color="#000">
          <Page3 />
        </Section>
        <Section color="#000">
          <Page4 />
        </Section>
      </SectionsContainer>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
