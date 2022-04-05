import React from "react";
import { Primary } from "../../stories/Button.stories";

import Header from "./Header";
import { Test } from "../Accordion/accordion.stories";

export default {
  title: "Example/Header",
  component: Header,
  // subcomponents: { Test },
};

export const Text = () => (
  <Header>
    <div className="headerOuter">
      <div>Hello Header</div>
      <div>
        <Primary label="Login" primary={true} />
        <Primary label="Signup" primary={true} />
      </div>
    </div>
    <div>
      <Test />
    </div>
  </Header>
);
