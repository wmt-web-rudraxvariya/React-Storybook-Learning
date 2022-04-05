import { Collapse } from "@chakra-ui/transition";
import React from "react";
import "./accordion.css";

const Accordion = (props) => {
  const [acc, setAcc] = React.useState(false);
  return (
    <div>
      <div
        className="accOuter"
        onClick={() => {
          setAcc(!acc);
        }}
      >
        {props?.title ? props.title : "Hello"}
      </div>
      <Collapse animateOpacity in={acc}>
        <div className={acc ? `openAcc` : `closedAcc`}>
          <h1>{props?.description ? props.description : "Hello"}</h1>
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
